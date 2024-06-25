import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { Artworks, Details, Header } from "./components/exports";
import Artwork from "./classes/Artwork";
import './App.css'
import Loading from "./components/Loading";

function App() {

    const [loading, setLoading] = useState(true);
    const [allArtworks, setAllArtworks] = useState({});

    const fetchArtworks = async () => {
        
        let artworks = {};
        
        let response = await fetch('http://localhost:5087/api/artworks');
        let data = await response.json();

        data.forEach(obj => {
        let artwork = new Artwork(obj.id, obj.title, obj.artist, obj.categories, obj.yearCreated, obj.media, obj.description, obj.dimensions, obj.imageId);
        artworks[artwork.id] = artwork;
        });
        
        setAllArtworks(artworks);
    };

    useEffect(() => {
        fetchArtworks();
    }, []);

    useEffect(() => {
        if (Object.values(allArtworks).length > 0) {
        setLoading(false);
        }
    }, [allArtworks]);
    
    return (
        <React.StrictMode>
        <Header />
        {loading && <Loading />}
        {!loading && <Routes>
            <Route path="/" element={ <Artworks artworks={allArtworks} /> } />
            <Route path="/artworks" element={ <Artworks artworks={allArtworks} /> } />
            <Route path="artworks/:id" element={ <Details artworks={allArtworks} /> } />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>}
        </React.StrictMode>
    )
}

export default App

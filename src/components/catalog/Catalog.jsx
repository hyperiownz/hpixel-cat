"use client";


import Furniture from "./furniture";
import { getAllRares } from "@/queries/server";
import './catalog.css'
import { Button } from "../ui/button";
import React, { useState, useEffect } from 'react'
import SearchBar from "../searchbar";

async function Catalog() { 
    const [index, setIndex] = useState(0)
    const [furniture, setFurniture] = useState(<></>);
    const [furnitureList, setFurnitureList] = useState(null);
    const [search, setSearch] = useState("");
    const [refreshSearch, setRefreshSearch] = useState(false)
    const [timeoutId, setTimeoutId] = useState()

    const prevPage = () => {
        if(index !== 0) {
            setIndex(index - 42);
        }
    }
    const nextPage = () => {
        setIndex(index + 42);
    }
    useEffect(() => {
        getAllRares(setFurnitureList)
    }, [])

    useEffect( () => {
        if(furnitureList){
            setFurniture(
                furnitureList.filter(item => item.name.includes(search))
                .map((item)=><Furniture key={item.id}  {...item} />)
                .slice(index, index+42))
            //https://stackoverflow.com/questions/26716818/using-array-map-to-filter-results-with-if-conditional
            //Note, As of 2/2018 Reduce + Push is fastest in Chrome and Edge, but slower than Filter + Map in Firefox  
        }

      }, [index, furnitureList, refreshSearch])

      const searchOnChange = (ev) => {
        if(timeoutId) {
            clearTimeout(timeoutId)
        }
        setSearch(ev.target.value)
        setTimeoutId(
            setTimeout(() => {
                setRefreshSearch(!refreshSearch)
                setTimeoutId(null)
            }, 2000)
        )
      }
    return (
        <div>
            <div className="furniture-container">
                <form className="search-bar">
                    <input type="search" value={search} placeholder='Drako dorado...' onInput={searchOnChange}/>
                </form>
            </div>
            <div className="furniture-container">
                {furniture}
            </div>
            <div className="furniture-container">
                <Button onClick={prevPage}>
                    Prev Page   
                </Button>
                <Button onClick={nextPage}>
                    Next Page
                </Button>
            </div>
        </div>
    );
}

export default Catalog;
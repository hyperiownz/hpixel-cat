import Catalog from "@/components/catalog";
import { Suspense } from "react";
import './styles.css'
import { getAllRares } from "@/queries/server";
import furniture from "@/components/catalog/furniture";

async function page() {
    
    return (
        <div>
            <Suspense fallback={<div class="loader"></div>}>
                        <Catalog/>
            </Suspense>
        </div>

    );
}

export default page;
import Catalog from "@/components/catalog";
import { Suspense } from "react";
import './styles.css'
async function page() {
    
    
    
    return (
        <div>
            <Suspense fallback={<div class="loader"></div>}>
            <Catalog />
            </Suspense>
        </div>
    );
}

export default page;
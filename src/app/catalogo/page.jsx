import Catalog from "@/components/catalog";
import { Suspense } from "react";
async function page() {
    
    
    
    return (
        <div>
            <Suspense fallback={<div>...cargando</div>}>
            <Catalog />
            </Suspense>
        </div>
    );
}

export default page;
import { Button } from "@heroui/react";
import Link from "next/link";
const Category = async () => {
    const res = await fetch("http://localhost:3000/category.json");
    const categories = await res.json();

    return (
        <div className="mb-5 max-w-7xl mx-auto px-4"> 
          
            <div className="flex flex-wrap gap-3 items-center">
                {
                    categories.map((category) => (
                      <Link   key={category.id} href= {`?category=${category.name.toLowerCase()}`}>

                        <Button 
                            variant="outline" 
                            size="sm" 
                          
                            className="rounded-full text-sm font-medium h-9 px-4 min-w-max"
                            
                        >
                            {category.name}
                        </Button>
                      </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;
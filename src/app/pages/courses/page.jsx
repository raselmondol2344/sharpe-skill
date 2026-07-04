import Category from "@/app/components/Category";
import PhotoCard from "@/app/components/PhotoCard";


const Popularcourse =async ({searchParams}) => {
    const {category} = await searchParams;
    //console.log(category);
    const getData = await fetch("http://localhost:3000/data.json")
    const photoData= await getData.json();
    //console.log(photoData);

    const filtercourse = category? photoData.filter(course=> course.category.toLowerCase()== category.toLowerCase()) : photoData
    return (
        <div className="max-w-7xl mx-auto ">
            <h1 className="text-start font-bold text-2xl p-5 ">All Course</h1>

            <Category></Category>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {
                    filtercourse.map((photo) => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }

            </div>
            
        </div>
    );
};

export default Popularcourse;
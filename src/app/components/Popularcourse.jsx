
import PhotoCard from "./PhotoCard";


const Popularcourse =async () => {
    const getData = await fetch("http://localhost:3000/data.json")
    const photoData= await getData.json();
    //console.log(photoData);
    return (
        <div className="max-w-7xl mx-auto ">
            <h1 className="text-center font-bold text-2xl p-5 ">Popular Course</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {
                    photoData.slice(0,4).map((photo) => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }

            </div>
            
        </div>
    );
};

export default Popularcourse;
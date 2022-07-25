import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Siderbar } from "../components/Siderbar";
import { Video } from "../components/Video";

export function Event(){
    const {slug} = useParams<{ slug: string }>()

    return(
        <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex flex-1">
         { slug 
            ? <Video lessonSlug={slug} />
            : <div className="flex-1 flex justify-center  opacity-25 ">
            
            <img src="/src/assets/kastrup.jpg" className="mt-0" alt="" />
            </div>   
           
            }
         <Siderbar />
         

         </main>
         

        </div>
        
    )
}
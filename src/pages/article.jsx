import { useParams,useNavigate} from 'react-router-dom'; // Hooks de React Router para obtener los parámetros de la ruta y la navegación programática
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const Article = () => {
    const { id } = useParams(); // Obtiene el ID del artículo de los parámetros de la ruta
    const [article, setArticle] = useState(null); // Declaración del estado para el artículo
    const navigate = useNavigate(); // Inicialización del hook de navegación


    {/* Obtener el articulo especifico por ID */}
   useEffect(() => {
    fetch(`https://api-blog-kgga.onrender.com/api/article/${id}`) // Llamada a la API para obtener el artículo
      .then(response => response.json())
      .then(data => {
        setArticle(data.article); // Guarda el artículo en el estado
      })
      .catch(error => console.error(error)); // Manejo de errores
  }, [id]);
    {/* Funcion para ejecutar el Delete del articulo */}
    const deleteArticle = () => {
        // Configuracion de la alerta de eliminar articulo //
        Swal.fire({
            title: "You're sure?",
            text: "you will not be able to recover the item!",
            icon: "warning",
            showCancelButton: true,
            allowOutsideClick: true,
            customClass: {
              popup: 'swal2-popup',
              title: 'swal2-title',
              content: 'swal2-content',
              confirmButton: 'swal2-confirm',
              cancelButton: 'swal2-cancel'
            }
          })
          .then((result) => {
            if (result.isConfirmed) {
              fetch(`https://api-blog-kgga.onrender.com/api/article/${id}`, {
                method: 'DELETE'
              })
              .then(response => response.json())
              .then( () => {
                navigate("/");
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
              })
              .catch(error => {
                console.error(error);
              });
            }
          });
    }
    {/* Funcion para actualizar la img del articulo */}
    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('image', file);
    
        try {
            const response = await fetch(`https://api-blog-kgga.onrender.com/api/upload-image/${id}`, {
                method: 'POST',
                body: formData
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Manejar el caso de éxito
                setArticle(data.article);
                Swal.fire("¡Done!", "Your article has been updated.", "success");
            } else {
                // Manejar diferentes códigos de estado aquí
                if (response.status === 404) {
                    Swal.fire("¡Error!", "Invalid image. Please upload a valid image.", "error");
                } else if (response.status === 400) {
                    Swal.fire("¡Error!", "Invalid file extension. Please upload a valid image file.", "error");
                } else {
                    // Manejar otros errores
                    Swal.fire("¡Error!", "The article could not be updated. Please try again later.", "error");
                }
            }
        } catch (error) {
            // Manejar errores de red
            console.error(error);
            Swal.fire("¡Error!", "The article could not be updated. Please check your Internet connection and try again.", "error");
        }
    }
    
    const handleFileChange = (e) => {
        // Llama a la función uploadImage cuando se selecciona un archivo
        if (e.target.files && e.target.files[0]) {
            uploadImage(e.target.files[0]);
        }
    };

      
    return (
        <main className='bg-white dark:bg-black'>   
            {article ? (
                <div className=' relative w-full h-screen bg-transparent'>       
                 <div className='grid grid-rows-4  md:grid-cols-5 md:pt-12 w-full h-screen'>
                    {/*Content Article*/}
                    <div className='row-span-3 md:row-span-4 md:col-span-3 bg-gradient-to-r from-[#c9e4ee] to-[#f3f9fc]  dark:bg-gradient-to-r dark:from-black dark:to-black pl-5 py-20 md:py-10 md:pl-12 lg:pl-28 2xl:pl-36  '
                        >
                        <div className='flex flex-col items-start gap-6'>
                        <p className='text-gray-400 select-none'>
                            {new Date(article.date).toLocaleString("es-ES", {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'})} 
                        </p>
                        <h2 className='font-bold text-3xl text-black  md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-white '>
                            {article.title}
                        </h2>
                        <p className=' pr-10  font-sans text-base text-black dark:text-white/80 overflow-auto h-[330px]  md:h-[700px] lg:h-[320px] xl:h-[460px] 2xl:h-[500px] '>
                            {article.content}
                        </p>
                        <div className='flex flex-row gap-5'>   
                            <button className='text-white bg-black xl:font-base py-1 px-3 md:py-2 md:px-6 lg:py-0 lg:px-3 xl:py-0 xl:px-3 border-transparent hover:bg-red-600 rounded-lg  border-[1px]  dark:text-white dark:border-white ' onClick={deleteArticle}>Delete</button>

                             {/* Input personalizado de tipo file */}
                            <label className='text-white bg-black xl:font-base py-1 px-3 md:py-2 md:px-6 lg:py-0 lg:px-3 xl:py-0 xl:px-3 border-transparent hover:bg-blue-600 rounded-lg  border-[1px]  dark:text-white dark:border-white cursor-pointer'>
                                <span>Upload Img</span>
                                <input type="file" className='hidden' onChange={handleFileChange} />
                            </label>
                        </div>
                        </div>
                    </div>
                    {/*Image Article */}
                    <div className=' row-span-1 md:row-span-4 md:col-span-2  md:bg-white dark:bg-black'>
                        <div className='  relative w-full h-full  ' style={{ backgroundImage: `url(${article.image})`}}>
                            <div className=' absolute bg-gradient-to-b  md:bg-gradient-to-r from-[#f3f9fc] dark:from-black/90 to-transparent left-0 top-0 w-full h-full  '>  </div>
                        </div>
                    </div>
                </div>      
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </main>
    )
}
export default Article


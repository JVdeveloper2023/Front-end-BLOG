
import { useForm } from 'react-hook-form'; // Hook de formulario de React para manejar los formularios
import { joiResolver } from '@hookform/resolvers/joi'; // Resolvedor de Joi para la validación de formularios
import Joi from 'joi'; // Biblioteca Joi para la validación de datos
import Swal from 'sweetalert2';  // Biblioteca SweetAlert2 para alertas bonitas
import { useNavigate} from 'react-router-dom'; // Hook de navegación de React Router para la navegación programática

// Esquema de validación de Joi para los campos del formulario
const schema = Joi.object({
  title: Joi.string().min(2).required().messages({
    'string.min': 'The title must be at least 2 characters long',
    'any.required': 'title is required'
  }),
  content: Joi.string().required().messages({
    'any.required': 'Content is required'
  }),
});


export const FormArticle = () => {
  // Inicialización del hook de formulario con el resolvedor de Joi
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: joiResolver(schema),
  });

  // Inicialización del hook de navegación
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const onSubmit = async (data) => {
    try {
      // Asegurarse de que la primera letra del título y del contenido estén en mayúsculas
      data.title = data.title.charAt(0).toUpperCase() + data.title.slice(1);
      data.content = data.content.charAt(0).toUpperCase() + data.content.slice(1);

      // Realizar la llamada a la API para crear el artículo
      const response = await fetch('https://api-blog-kgga.onrender.com/api/create-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Si la respuesta no es ok, lanzar un error
      if (!response.ok) {
        throw new Error('Error al crear el artículo');
      }

      // Mostrar la alerta de éxito
      Swal.fire({ 
        title: "Article Created!",  
        icon: "success",
        confirmButtonText: "Exit",
        customClass: {
          popup: 'swal2-popup',
          title: 'swal2-title',
          content: 'swal2-content',
          confirmButton: 'swal2-confirm',
          cancelButton: 'swal2-cancel'
        },
      });

      // Resetear el formulario después de enviar los datos y redirigir a la pagina home
      reset();
      navigate("/");

    } catch (error) {
      //Mostrar alerta de error
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: 'Hubo un problema al crear el artículo. Por favor, inténtalo más tarde.',
        customClass: {
          popup: 'swal2-popup',
          title: 'swal2-title',
          content: 'swal2-content',
          confirmButton: 'swal2-confirm',
          cancelButton: 'swal2-cancel'
        },
      });
    }
  };

  // Renderiza el formulario
  return (
    <form className='w-full h-full' onSubmit={handleSubmit(onSubmit)}>
      <label className='block  text-black font-medium dark:font-normal dark:text-gray-400' htmlFor="title">Title  </label>
      <input className='w-full mb-1 px-2 rounded-lg  dark:border-none dark:bg-zinc-800/20 outline-none dark:text-gray-300'  {...register('title')} />
      {errors.title && <p className="text-red-500 pt-0 text-xs mb-3">{errors.title.message}</p>}

      <label className='block text-black  font-medium dark:font-normal  dark:text-gray-400 ' htmlFor="content">Content</label>
      <textarea className='w-full h-[370px] md:h-[500px] lg:h-[220px] xl:h-[350px] 2xl:h-[350px] p-2 mb-1 dark:bg-zinc-800/20 outline-none dark:text-gray-300 text-sm rounded-lg  dark:border-none ' {...register('content')} />
      {errors.content && <p className="text-red-500 pt-0 text-xs mb-3">{errors.content.message}</p>}

      <input className='block mb-1  text-base font-semibold px-3 rounded-lg text-white border-2 border-transparent transition duration-300 bg-blue-600   hover:bg-white hover:text-blue-600 hover:border-blue-600'   type="submit" value='Send' />
      <p className='text-[12px] text-cyan-800 dark:text-amber-200'><span className='font-bold'>Nota: </span>The article will be created with a default image, if you want to change the image go to the article and use the upload button </p>
      
    </form>
  );
};

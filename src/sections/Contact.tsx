const Contact = () => {
  const hanldeSendEmail = async () => {
    console.log('enviando email')
  }

  return (
    <section
      id="contacto"
      className="px-4 md:px-24 flex flex-col gap-2 justify-center items-center pt-24"
    >
      <h2 className="text-5xl font-bold text-center mb-6">Contactános</h2>
      <p className="text-center capitalize text-3xl max-w-[600px] mb-20 text-primary">
        SI TIENES PREGUNTAS O NECESITAS PRECIO, ESTAMOS A TU SERVICIO
      </p>
      <form
        onSubmit={hanldeSendEmail}
        aria-label="Formulario de contacto"
        className="flex flex-col items-center gap-6 md:w-[50%]"
      >
        <div className="flex gap-2 items-center justify-between w-full">
          <div className="w-full">
            {' '}
            <label htmlFor="name">Nombre</label>
            <input
              className="w-full border-b-2 border-gray-black p-3 outline-0"
              type="text"
              name="name"
              id="name"
              placeholder="Tu Nombre"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Email</label>
            <input
              className="w-full border-b-2 border-gray-black p-3 outline-0"
              type="email"
              name="email"
              id="email"
              placeholder="ejemplo@gmail.com"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="message">Mensaje</label>
          <textarea
            className="w-full border-b-2 border-gray-black outline-0 p-3"
            placeholder="Dejanos tu mensaje..."
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-3 cursor-pointer text-xl"
        >
          Enviar Email
        </button>
      </form>
    </section>
  )
}

export default Contact

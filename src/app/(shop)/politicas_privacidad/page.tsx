import { config } from "@/config/site";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Politica de privacidad',
  description: `Descubre cómo ${config.name} protege tu información personal. Lee nuestra política de privacidad para entender qué datos recopilamos, cómo los usamos y tus derechos respecto a tu información.`
}


export default function PoliticasPrivadidadPage() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Política de Privacidad de Petlify
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            En Petlify, nos comprometemos a proteger la privacidad y seguridad
            de los datos personales de nuestros usuarios y clientes. Esta
            política describe cómo recopilamos, utilizamos y protegemos la
            información que nos proporciona al utilizar nuestros servicios en
            línea.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Recopilación de Datos Personales
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Recopilamos información personal cuando te registras en nuestra
            plataforma, realizas una compra o te suscribes a nuestras
            comunicaciones. Esto puede incluir tu nombre, dirección de correo
            electrónico, número de teléfono, información de pago y detalles de
            envío.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Uso de Datos Personales en Petlify
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            En Petlify, utilizamos tus datos personales para una variedad de
            propósitos que nos permiten brindarte un servicio excepcional y una
            experiencia de compra personalizada.
          </p>
          <section className="mt-2 pt-0 text-gray-500">
            <h3 className="font-bold">Gestión del Proceso de Compra</h3>
            <p>
              Utilizamos tus datos personales para gestionar y procesar tus
              pedidos, desde la selección de productos hasta la finalización de
              la transacción. Esto incluye la verificación de la disponibilidad
              de productos, el procesamiento de pagos y la coordinación de la
              entrega.
            </p>
          </section>

          <section className="mt-2 pt-0 text-gray-500">
            <h3 className="font-bold">
              Personalización y Estrategias Comerciales
            </h3>
            <p>
              Implementamos estrategias comerciales adaptadas a tus preferencias
              y comportamientos de compra. Analizamos tus interacciones con
              nuestro sitio para ofrecerte recomendaciones de productos
              personalizadas y promociones relevantes, con el objetivo de
              mejorar tu experiencia de compra.
            </p>
          </section>

          <section className="mt-2 pt-0 text-gray-500">
            <h3 className="font-bold">
              Seguimiento de Comportamientos de Compra
            </h3>
            <p className="text-gray-500">
              Realizamos un seguimiento de tus patrones de compra y
              comportamientos en nuestro sitio para comprender mejor tus
              necesidades y preferencias. Esta información nos ayuda a ajustar
              nuestra oferta de productos y servicios para satisfacer tus
              expectativas y mejorar continuamente nuestros servicios.
            </p>
          </section>

          <section className="mt-2 pt-0 text-gray-500">
            <h3 className="font-bold ">Comunicaciones y Soporte al Cliente</h3>
            <p className="text-gray-500">
              Nos comunicamos contigo a través de diversos canales, como correo
              electrónico o mensajes de texto, para proporcionarte
              actualizaciones sobre tus pedidos, resolver cualquier problema que
              puedas tener y responder a tus consultas y solicitudes de manera
              oportuna.
            </p>
          </section>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Compartir Datos Personales en Petlify
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            En Petlify, comprendemos la importancia de proteger tus datos
            personales y nos comprometemos a compartir esta información
            únicamente cuando sea necesario para cumplir con nuestros servicios
            y mejorar tu experiencia como cliente. A continuación, explicamos
            cuándo y cómo podemos compartir tus datos personales con terceros:
          </p>

          <section className="mt-2 pt-0 text-gray-500">
            <h3 className="font-bold">Proveedores de Servicios de Pago</h3>
            <p>
              En algunos casos, podemos compartir tus datos personales con
              proveedores de servicios de pago, como pasarelas de pago o
              procesadores de transacciones, para procesar tus pagos de manera
              segura y eficiente. Estos proveedores están sujetos a estrictos
              estándares de seguridad y confidencialidad.
            </p>
          </section>
          <section className="mt-2 pt-0 text-gray-500">
            <h3 className="font-bold">Empresas de Envío</h3>
            <p>
              Para garantizar la entrega exitosa de tus pedidos, podemos
              compartir tu información de envío con empresas de envío y
              mensajería. Esto incluye detalles como tu nombre, dirección de
              envío y número de teléfono para coordinar la entrega de tus
              productos.
            </p>
          </section>
          <section className="mt-2 pt-0 text-gray-500">
            <h3 className="font-bold">Otros Terceros de Confianza</h3>
            <p>
              Además de los casos mencionados anteriormente, podemos compartir
              tus datos personales con otros terceros de confianza, como
              proveedores de servicios de tecnología, análisis de datos o
              marketing. Estos terceros están sujetos a acuerdos de
              confidencialidad y solo acceden a tus datos personales en la
              medida necesaria para prestar los servicios acordados.
            </p>
          </section>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Nos comprometemos a garantizar que cualquier divulgación de tus
            datos personales se realice de manera segura y en cumplimiento con
            las leyes de privacidad aplicables. Mantenemos acuerdos de
            confidencialidad con terceros para proteger tus datos y garantizar
            que se utilicen únicamente para los fines autorizados.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Cookies y Tecnologías Similares
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Empleamos el uso de cookies. Al utilizar el sitio web de Petlify,
            usted acepta el uso de cookies de acuerdo con la política de
            privacidad de Petlify. La mayoría de los modernos sitios web
            interactivos de hoy en día usan cookies para permitirnos recuperar
            los detalles del usuario para cada visita.
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Las cookies se utilizan en algunas áreas de nuestro sitio para
            habilitar la funcionalidad de esta área y la facilidad de uso para
            las personas que lo visitan. Algunos de nuestros socios
            afiliados/publicitarios también pueden usar cookies.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Derechos de los Usuarios en Petlify
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            En Petlify, reconocemos y respetamos los derechos que tienen
            nuestros usuarios en relación con sus datos personales. A
            continuación, describimos los principales derechos que tienes como
            usuario:
          </p>
          <section className="mt-4 text-gray-500 dark:text-gray-400">
            <h3 className="font-bold">Derecho de Acceso</h3>
            <p>
              Tienes derecho a acceder a tus datos personales que tenemos en
              nuestro poder. Esto te permite conocer qué información tenemos
              sobre ti y cómo la estamos utilizando.
            </p>
          </section>
          <section className="mt-4 text-gray-500 dark:text-gray-400">
            <h3 className="font-bold">Derecho de Rectificación</h3>
            <p>
              Si la información personal que tenemos sobre ti es incorrecta,
              incompleta o inexacta, tienes derecho a solicitar que la
              rectifiquemos o actualicemos.
            </p>
          </section>
          <section className="mt-4 text-gray-500 dark:text-gray-400">
            <h3 className="font-bold">Derecho de Cancelación</h3>
            <p>
              Puedes solicitar la cancelación o eliminación de tus datos
              personales de nuestras bases de datos en ciertas circunstancias,
              como cuando la información ya no es necesaria para los fines para
              los que fue recopilada.
            </p>
          </section>
          <section className="mt-4 text-gray-500 dark:text-gray-400">
            <h3 className="font-bold">Derecho de Oposición</h3>
            <p>
              Tienes derecho a oponerte al tratamiento de tus datos personales
              en determinadas situaciones, como cuando el tratamiento se lleva a
              cabo con fines de marketing directo.
            </p>
          </section>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Para ejercer cualquiera de los derechos mencionados anteriormente,
            puedes ponerte en contacto con nuestro equipo de atención al cliente
            a través de los siguientes medios:
          </p>

          <ul className="list-disc list-inside">
              <li>
                Correo electrónico: [Dirección de correo electrónico de atención
                al cliente]
              </li>
              <li>Teléfono: [Número de teléfono de atención al cliente]</li>
              <li>
                Formulario de contacto en nuestro sitio web: [Enlace al
                formulario de contacto]
              </li>

            </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Contacto y Atención al Cliente en Petlify
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            En Petlify, estamos comprometidos a brindarte un servicio de
            atención al cliente receptivo y efectivo.
          </p>
          <ul className="mt-2 text-gray-500 dark:text-gray-400 list-disc list-inside">
            <li>Correo Electrónico</li>
            <li>Formulario de Contacto</li>
            <li>Número de Teléfono</li>
            <li>Horarios de Atención</li>
          </ul>
        </div>
        <div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            En Petlify, nos comprometemos a cumplir con esta política de
            privacidad y mantenerla actualizada de acuerdo con las leyes y
            regulaciones aplicables. Valoramos la confianza que deposita en
            nosotros al proporcionarnos su información personal y nos esforzamos
            por protegerla de manera responsable.
          </p>
          {/* <p className="mt-2 text-gray-500 dark:text-gray-400">
            Fecha de última actualización: [Indicar fecha]
          </p> */}
        </div>
      </div>
    </main>
  );
}

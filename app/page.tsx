import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  CheckCircle2,
  XCircle,
  Clock,
  Users,
  ChefHat,
  LayoutGrid,
  Eye,
  MessageCircle,
  Sparkles,
  AlertCircle,
} from "lucide-react";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "593987654321";

export default function Home() {
  const appLink = process.env.NEXT_PUBLIC_APP_URL || "#";
  const whatsappDemoLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero solicitar una demo de Teikio")}`;

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/teikio-logo.svg"
              alt="Teikio Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-gray-900">Teikio</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hidden sm:inline-flex"
            >
              <a
                href={whatsappDemoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar demo
              </a>
            </Button>
            <Button asChild size="lg">
              <a href={appLink} target="_blank" rel="noopener noreferrer">
                Ir a la app
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b px-6 py-20 pt-32 sm:py-32 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Teikio
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Pedidos claros, cocina organizada y control total
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Termina con los errores en los pedidos, la confusión en cocina y
                el estrés de las horas pico. Lleva tu restaurante con orden y
                tranquilidad.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button asChild size="lg">
                  <a href={appLink} target="_blank" rel="noopener noreferrer">
                    Ir a la app
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href={whatsappDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicitar demo
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-0 translate-y-6 rounded-[32px] bg-primary/20 blur-3xl"
                aria-hidden
              />
              <div className="relative rounded-[32px] border border-white/40 bg-white shadow-2xl ring-1 ring-gray-100">
                <Image
                  src="/images/hero-image.png"
                  alt="Panel de control de pedidos en Teikio"
                  width={1421}
                  height={768}
                  className="h-auto w-full rounded-[32px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Te suena familiar?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Estos son los problemas que viven los dueños de restaurante cada
              día
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <XCircle className="h-10 w-10 text-red-500" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Pedidos mal tomados
              </h3>
              <p className="mt-2 text-gray-600">
                Los meseros anotan mal, la cocina no entiende la letra, y el
                cliente recibe algo que no pidió.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <AlertCircle className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Comida desperdiciada
              </h3>
              <p className="mt-2 text-gray-600">
                Cada error significa comida a la basura, dinero perdido y
                clientes molestos.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Clock className="h-10 w-10 text-yellow-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Caos en horas pico
              </h3>
              <p className="mt-2 text-gray-600">
                Cuando el restaurante está lleno, nadie sabe qué mesa pidió qué,
                ni qué falta preparar.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Eye className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Falta de control
              </h3>
              <p className="mt-2 text-gray-600">
                No sabes qué está pasando en tu negocio si no estás ahí
                vigilando todo el tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Así te ayuda Teikio
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Una aplicación simple que conecta a tus meseros con la cocina. Los
              pedidos llegan claros, organizados y al instante. Sin papeles, sin
              errores, sin estrés.
            </p>
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      El mesero toma el pedido en su celular
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Todo claro, ordenado y sin errores de escritura.
                      Selecciona platos, cantidades y observaciones con unos
                      toques.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      La cocina lo recibe al instante
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Nada de papelitos perdidos ni letra ilegible. El pedido
                      aparece en la pantalla de cocina de inmediato, listo para
                      preparar.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Tú ves todo desde cualquier lugar
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Mesas ocupadas, pedidos activos, qué está listo y qué
                      falta. Todo el control en tu mano, aunque no estés en el
                      restaurante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="rounded-2xl border-4 border-gray-200 bg-gray-100 p-4 shadow-xl">
                <div className="aspect-square rounded-lg bg-white flex items-center justify-center text-gray-400">
                  <p className="text-center">
                    Diagrama o captura del flujo
                    <br />
                    <span className="text-sm">(Mesero → App → Cocina)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Qué puedes hacer con Teikio
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Todo lo que necesitas para llevar tu restaurante de forma ordenada
            </p>
          </div>
          <div className="mt-16 grid gap-12 lg:gap-16">
            {/* Feature 1 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Toma pedidos sin errores
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Tus meseros ven el menú completo en su celular. Seleccionan
                  los platos, agregan cantidades y notas especiales (sin sal,
                  sin cebolla, etc.). Todo queda registrado correctamente desde
                  el primer momento.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Menú digital siempre actualizado
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Observaciones claras del cliente
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Cero errores de escritura a mano
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border-4 border-gray-200 bg-gray-100 p-4 shadow-xl">
                <div className="aspect-[4/3] rounded-lg bg-white flex items-center justify-center text-gray-400">
                  <p className="text-center px-4">
                    Screenshot: Pantalla de mesero
                    <br />
                    tomando un pedido
                    <br />
                    <span className="text-sm">(Vista de menú + selección)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="lg:order-last">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <ChefHat className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Envía los pedidos a cocina al instante
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  En cuanto el mesero confirma el pedido, aparece
                  automáticamente en la pantalla de la cocina. Tu equipo sabe
                  exactamente qué preparar, para qué mesa, y qué observaciones
                  tiene cada plato.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Los pedidos llegan organizados por mesa
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      La cocina ve qué está pendiente y qué está listo
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Elimina demoras y confusiones
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border-4 border-gray-200 bg-gray-100 p-4 shadow-xl lg:order-first">
                <div className="overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/images/kitchen-screen.png"
                    alt="Pantalla de cocina con pedidos activos"
                    width={1405}
                    height={768}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <LayoutGrid className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Organiza tus mesas de forma visual
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Ve de un vistazo qué mesas están ocupadas, libres o con
                  pedidos pendientes. Asigna pedidos a cada mesa y mantén todo
                  bajo control, incluso en las horas más movidas.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Vista completa de todas las mesas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Cada mesa muestra su estado actual
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Organización clara durante horas pico
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border-4 border-gray-200 bg-gray-100 p-4 shadow-xl">
                <div className="aspect-[4/3] rounded-lg bg-white flex items-center justify-center text-gray-400">
                  <p className="text-center px-4">
                    Screenshot: Vista de mesas
                    <br />
                    con estados (ocupada/libre)
                    <br />
                    <span className="text-sm">
                      (Layout visual del restaurante)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="lg:order-last">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Control total de tu restaurante
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Como dueño, tienes acceso a todo lo que pasa en tu negocio.
                  Ves los pedidos en tiempo real, sabes qué mesas están activas
                  y puedes estar tranquilo incluso cuando no estás presente.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Monitorea desde tu celular o tablet
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Ve qué está pasando en cada momento
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-gray-700">
                      Tranquilidad de saber que todo fluye bien
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border-4 border-gray-200 bg-gray-100 p-4 shadow-xl lg:order-first">
                <div className="aspect-[4/3] rounded-lg bg-white flex items-center justify-center text-gray-400">
                  <p className="text-center px-4">
                    Screenshot: Dashboard del dueño
                    <br />
                    con resumen de actividad
                    <br />
                    <span className="text-sm">(Vista general del negocio)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Para quién es Teikio?
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Teikio está diseñado para{" "}
              <strong>restaurantes pequeños y medianos en Ecuador</strong> que
              quieren llevar su negocio con más orden y menos estrés.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Si eres dueño de un restaurante familiar
              </h3>
              <p className="mt-2 text-gray-700">
                Y quieres que tu equipo trabaje ordenado sin complicaciones
                técnicas, esta app es para ti.
              </p>
            </div>
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Si tienes meseros y cocina
              </h3>
              <p className="mt-2 text-gray-700">
                Y estás cansado de los errores de comunicación, los pedidos mal
                tomados y el desperdicio de comida.
              </p>
            </div>
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Si quieres tener control
              </h3>
              <p className="mt-2 text-gray-700">
                Sin estar vigilando cada segundo, y poder confiar en que todo
                está funcionando bien.
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-gray-600">
            No necesitas ser experto en tecnología. Teikio es tan simple que tu
            equipo lo aprende en minutos.
          </p>
        </div>
      </section>

      {/* Why Teikio */}
      <section className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Por qué usar Teikio
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Fácil de usar</h3>
              <p className="mt-3 text-gray-300">
                Tu equipo lo aprende en minutos. No hace falta ser experto en
                tecnología.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Listo para usar hoy
              </h3>
              <p className="mt-3 text-gray-300">
                Sin instalaciones complicadas. Tu restaurante funcionando con
                Teikio en minutos.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Soporte directo por WhatsApp
              </h3>
              <p className="mt-3 text-gray-300">
                ¿Tienes dudas? Te ayudamos por WhatsApp cuando lo necesites.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Hecho para restaurantes ecuatorianos
              </h3>
              <p className="mt-3 text-gray-300">
                Diseñado pensando en cómo trabajan los restaurantes en Ecuador.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Ahorra tiempo y dinero
              </h3>
              <p className="mt-3 text-gray-300">
                Menos errores = menos comida desperdiciada = más ganancias.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Funciona en cualquier celular
              </h3>
              <p className="mt-3 text-gray-300">
                No necesitas equipos caros. Usa los celulares que ya tienes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Empieza hoy
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Prueba la app directamente o solicita una demo personalizada.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href={appLink} target="_blank" rel="noopener noreferrer">
                  Ir a la app
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={whatsappDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Lleva tu restaurante con orden y tranquilidad
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Termina con los errores, el desperdicio y el caos en tu restaurante.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-blue-50"
            >
              <a href={appLink} target="_blank" rel="noopener noreferrer">
                Ir a la app
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={whatsappDemoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar demo por WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-8 text-blue-100">
            ¿Preguntas? Escríbenos por WhatsApp, te respondemos en minutos.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Teikio</h3>
            <p className="mt-2 text-gray-400">
              Pedidos claros, cocina organizada y control total de tu
              restaurante
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <a
                  href={whatsappDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contáctanos por WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Teikio. Hecho en Ecuador para restaurantes
              ecuatorianos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { designs, colors } from '../data'

const Designs: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-6" style={{ backgroundColor: '#f7f7ff' }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center" style={{ color: colors.darkSlate }}>
          Knitwear Designs
        </h1>
        <p className="text-xl text-center mb-16" style={{ color: colors.mutedBlue }}>
          Hand-crafted knitwear pieces that combine artistry with technical skill
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div
              key={design.id}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundColor: colors.lightBlue }}
            >
              <div
                className="h-64 flex items-center justify-center text-center"
                style={{ backgroundColor: colors.mutedBlue }}
              >
                <p style={{ color: colors.offWhite }} className="text-sm">
                  [Design Image: {design.image}]
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.darkSlate }}>
                  {design.title}
                </h3>
                <p style={{ color: colors.darkSlate }}>
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Designs

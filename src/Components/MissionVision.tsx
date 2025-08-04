import type { ICompanyValue } from '../types/ITeamMember'
import CompanyValueCard from './CompanyValueCard'

interface Props {
  companyValues: ICompanyValue[]
}

const MissionVision = ({ companyValues }: Props) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Lo que nos Define
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nuestros valores fundamentales guían cada decisión y proyecto que
          emprendemos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {companyValues.map((value, index) => (
          <CompanyValueCard key={value.id} value={value} index={index} />
        ))}
      </div>

      {/* Compromisos adicionales */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Nuestros Compromisos
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Sustentabilidad Ambiental
              </h5>
              <p className="text-gray-600 text-sm">
                Promovemos el uso de energías renovables y prácticas
                eco-amigables en todos nuestros proyectos.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Capacitación Continua
              </h5>
              <p className="text-gray-600 text-sm">
                Invertimos constantemente en la formación de nuestro equipo para
                mantenernos a la vanguardia.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Innovación Tecnológica
              </h5>
              <p className="text-gray-600 text-sm">
                Adoptamos las últimas tecnologías para ofrecer soluciones más
                eficientes y modernas.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Compromiso Social
              </h5>
              <p className="text-gray-600 text-sm">
                Contribuimos al desarrollo de nuestra comunidad a través de
                proyectos sociales y educativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionVision

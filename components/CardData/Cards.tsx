import { cardData } from "../Data/data"

const Cards = () => {
  return (
    <div className="pt-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3">
            {cardData.map((item)=>{
                return (
                    <div key={item.id} className="bg-gray-300 p-3 shadow-md flex 
                    justify-between flex-col gap-2 hover:scale-105 transition-all duration-300">
                        <div className="space-y-2">
                        <h2 className="text-slate-700 font-bold text-lg">{item.title}</h2>
                        <p className="text- text-slate-700">{item.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cards
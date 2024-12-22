type Data = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};


const Page = async () => {
    const url = await fetch("https://simple-books-api.glitch.me/books/")
    const data: Data[] = await url.json()
    return (
        <div>
          
            <div className="py-[50px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] flex flex-col items-center p-8">
            <h1 className="text-[28px] font-bold relative inline-block">
        Server Side Book List
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
      </h1>
                <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 mt-8">
                    {data.map((todo, index) => (
                        <div key={index} className="w-full bg-[white] shadow-lg p-[20px] rounded-[8px] hover:shadow-xl hover:scale-[1.05] transition">
                            <p className="text-[22px] font-[600] text-[#3d64b4] mb-[10px]">{todo.name}</p>
                            <p className="text-[gray] mb-[8px]"><span className="font-bold">ID:</span> {todo.id}</p>
                            <p className="text-[gray] mb-[8px]"><span className="font-bold">Type:</span> {todo.type}</p>
                            <p className={`${todo.available == true ? "text-[green]" : "text-[red]"} font-semibold`}>{todo.available == true ? "Available" : "Unavailable"}</p>
                            <p className={`text-right mt-[15px] ${todo.available == true ? "text-[red]" : "text-[green]"}`}>Read more...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
function BigCard({plateforme, utilisateur, total, aujourdHui}) {

  return (
    <section className={`flex flex-col text-center gap-10 p-6 rounded-lg shadow-md px-20 py-10`}>  
        <div>
            <svg>{plateforme}</svg>
            <p>{utilisateur}</p>
        </div>
        <p>{total}</p>
        <p>{aujourdHui}</p>


    </section>
  );
}


export default BigCard
function SmCard({plateforme, indicateur, montant, pourcentage}) {

  return (
    <section className={`flex flex-col text-center gap-10 p-6 rounded-lg shadow-md px-20 py-10`}>  
        <div>
            <p>{plateforme}</p>
            <p>{indicateur}</p>
        </div>
        <p>{montant}</p>
        <p>{pourcentage}</p>


    </section>
  );
}


export default SmCard
import ProductList from "./products/ProductList";
import ComicsComponent from "./ComicsComponent";


export default function AppMain() {



    return (
        <main>
          <section className="upper-main">
            <div><p className="series allineamento">CURRENT SERIES</p></div>
          </section>
            <section className="nerro ">
              <div className="allineamento">
                <ProductList />
              </div>
              <button className="load-more-btn">LOAD MORE</button>
            </section>
            <section className="azzurra">
                <ComicsComponent />
            </section>
        </main>
    )
}
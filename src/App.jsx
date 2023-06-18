import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DatePicker from "react-date-picker";
import "./App.css"
import { AiOutlineDelete } from 'react-icons/ai'

function App() {
  const dispatch = useDispatch();

  const [formdata, setFormdata] = useState({ name: "", descrition: "", categoria: "", date: "" });

  const { products } = useSelector((state) => state.products);

  return (
    <>
        <div className="main">
          <div className="bg">
          <div className="form" action="">
          <input
            required
            value={formdata.name}
            type="text"
            placeholder="Título"
            onChange={(event) =>
              setFormdata({ ...formdata, name: event.target.value })
            }
          />


          <select
            required
            value={formdata.categoria}
            onChange={(e) => {
              setFormdata({...formdata, categoria: e.target.value})
            } }
            >
            <option value="Trabalho">Trabalho</option>
            <option value="Lazer">Lazer</option>
            <option value="Prioridade">Prioridade</option>
            <option value="Outros">Outros</option>
          </select>

          <input
            required
            className="teste" 
            type="date" 
            value={formdata.date}
            onChange={(event) =>
              setFormdata({ ...formdata, date: event.target.value })
            }
          /> 

          <input
            required
            value={formdata.descrition}
            type="text"
            placeholder="Preço"
            onChange={(event) =>
              setFormdata({ ...formdata, descrition: event.target.value })
            }
          />

          


          <button
            className="btnSalva"
            onClick={() => {
              dispatch({ type: "ADD_PRODUCT", payload: { product: formdata } });
              setFormdata({ name: "", descrition: "" });
            }}
          >
            Salvar
          </button> 

          </div>

       
          </div>    

          <div className="center">
            <h1>tarefas</h1>
          <div >
            {products.map((product, idx) => (
              <div className="card" key={idx}>
                <h1 className="title">{product.name}</h1>
                <p className="categoria">{product.categoria}</p>
                <p className="descrition">{product.descrition}</p>
                <p>{product.data}</p>
                
                      
                
                <AiOutlineDelete
                className="btnDelete"
                onClick={()=>dispatch({
                  type: "EXCLUIR",
                  payload:{
                    idx
                  }
                })}
                />
                
              </div>
            ))}
          </div>
          </div>
        </div>
    </>
  );
}

export default App;


//AiOutlineDelete


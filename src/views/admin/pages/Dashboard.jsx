import { Navigate, Route, Routes } from 'react-router-dom'
import Concursos from '../../public/pages/Concursos'
import { deleteItem } from '../../../shared/utils/api/concursos'
import { useState } from 'react';

function Dashboard() {
  const [updateFlag, setUpdateFlag] = useState(false);

  const handleDelete = async (Id) => {
    const resul = await deleteItem(Id);
    if (!resul.error) {
      setUpdateFlag(!updateFlag);
    }
    console.log(resul);
  };

  const handleEdit = () => console.log("edit");

  return (
    <div>
      <h1>Administrar concursos</h1>
      <Routes>
        <Route index element={<Navigate to={"concursos"} />} />
        <Route path='concursos'
          element={<Concursos
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            updateFlag={updateFlag}
          />}
        />
      </Routes>
    </div>
  )
}

export default Dashboard;

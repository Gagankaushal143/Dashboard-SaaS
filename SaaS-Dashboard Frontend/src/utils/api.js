const API = import.meta.env.VITE_API_URL || "http://localhost:5000";


export const loginUser = async (userData) => {
  const res = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return res.json();
}


export const signupUser = async (userData) => {
  const res = await fetch(`${API}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return res.json();
};


export const getDashboardStats = async () => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/api/dashboard/stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}



// Notes API ----------------------------------------------------->

export const getNotes = async () =>{
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/api/notes`, {
    headers : {
      Authorization : `Bearer ${token}`,
    },
  });

  return res.json();
};


export const createNote = async (data) =>{
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/api/notes`, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      Authorization: `Bearer ${token}`,
    },
    body : JSON.stringify(data)
  });
  return res.json();
};


export const deleteNotes = async (id) =>{
  const token = localStorage.getItem("token");
  console.log(`${API}/api/notes/${id}`)
  
  await fetch(`${API}/api/notes/${id}`, {
    method: "DELETE",
    headers :{
      Authorization : `Bearer ${token}`,
    },
  });
};


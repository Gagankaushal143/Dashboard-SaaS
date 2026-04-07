import { useEffect, useState } from "react"
import { createNote, deleteNotes, getNotes } from "../utils/api";


export const Notes = () => {

    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    useEffect(() =>{
        const fetchNotes = async () =>{
            const data = await getNotes();
            setNotes(data);
        }
        
        fetchNotes();
    }, []);


    const handleAdd = async (e) =>{

        e.preventDefault();
        
        if(title.trim() === "" && content.trim() === ""){
            return  setError("All fields required !!")
        }
        const newNote = await createNote({title, content});
        
        console.log("New Note" , newNote)
        setNotes([...notes, newNote]);
        setTitle("");
        setContent("");
        setError("");
    };

    const handleDelete = async (id) =>{
        console.log("Delete ID: " , id)
        await deleteNotes(id);
        setNotes(notes.filter((n) => n._id !== id));
    };


  return (
    <div className="p-6">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Notes</h1>
            <button className="bg-linear-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white shadow-xl">
                + Add Note
            </button>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl mb-6">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full mb-2 p-2 rounded bg-gray-800 text-white outline-none"/>
            <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your note..." className="w-full p-2 rounded bg-gray-800 text-white outline-none"/>
            <div className="text-red-500 text-center">
                {error}
            </div>
            <button onClick={handleAdd} className="mt-3 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 cursor-pointer">Save Note</button>
        </div>

        {notes.length === 0 ? (
            <p className="text-gray-500 text-lg mt-20 text-center">No notes yet...</p>
        ): (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
                <div key={note._id} className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition-all">
                    <h3 className="font-semibold mb-2 text-gray-200 text-lg">{note.title}</h3>
                    <p className="text-gray-300 text-base mb-3">{note.content}</p>
                    <button onClick={() => handleDelete(note._id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer text-sm">Delete</button>
                </div>
            ))}
        </div>)}
    </div>
  )
}

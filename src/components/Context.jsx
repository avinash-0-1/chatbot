import React, { createContext, useState } from 'react'
import main from './gemini'
export const Context = createContext()

const ContextProvider = (props) => {
    const [input, setInput] = useState('')
    const [recent_prmt, setRecent_prmt] = useState('')
    const [prev_prmt, setPrev_prmt] = useState([])
    const [show_result, setShow_result] = useState(false)
    const [loading, setLoading] = useState(false)
    const [result_data, setResult_data] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [filePreviewUrl, setFilePreviewUrl] = useState(null) //*

    //--------------------------------------------------
    const delayPara=(index,nextWord)=>{
        setTimeout(() => {
            setResult_data(prev=>prev+nextWord);
        },75*index);
    }

//-------------------------------------------------------
    const newChat = ()=>{
        setLoading(true)
        setShow_result(false)
        setSelectedFile(null)
        if (filePreviewUrl) {
            URL.revokeObjectURL(filePreviewUrl)
        }
        setFilePreviewUrl(null)
    }

//====================== h msg api 
    const onSend = async(prmt)=>{
      setResult_data("")
      setLoading(true)
      setShow_result(true)
     //================================ # ================== 
      let response;
      if (prmt!==undefined){
            response = await main(prmt, selectedFile)  
            setRecent_prmt(prmt)
      }
      else{
        setPrev_prmt(prev=>[...prev,input])
        setRecent_prmt(input)
        response = await main(input, selectedFile)
      }
    //   ----------------------------------------------------
      let responseArray = response.split("**")
      let newResponse='';
      for(let i=0;i<responseArray.length;i++){
            if(i==0||i%2 !==1){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
      }
      let newResponse2 = newResponse.split("*").join("</br>") || newResponse.split("**").join("</br></br>")
      let newResponseArray = newResponse2.split(" ");
      
      //---------------------------------------------------------------------
      for(let i=0;i<newResponseArray.length;i++){
        const nextWord = newResponseArray[i];
        delayPara(i,nextWord+" ")
      }
      setLoading(false)
      setInput("")
    }
// -------------------------------------------------
    const handleFileChange = (file) => {
        if (file) {
            const previewUrl = URL.createObjectURL(file)
            setFilePreviewUrl(previewUrl)
            setSelectedFile(file)
            setInput('')
            setShow_result(false)
        } else {
//-----------------------------------------
            if (filePreviewUrl) {
                URL.revokeObjectURL(filePreviewUrl)
            }
            setFilePreviewUrl(null)
            setSelectedFile(null)
            setInput('')
        }
    }
// --------------------------------------
    React.useEffect(() => {
        return () => {
            if (filePreviewUrl) {
                URL.revokeObjectURL(filePreviewUrl)
            }
        }
    }, [filePreviewUrl])

    const contextValue = {
        prev_prmt,
        setPrev_prmt,
        onSend,
        recent_prmt,
        setRecent_prmt,
        show_result,
        loading,
        result_data,
        input,
        setInput,
        newChat,
        selectedFile,
        handleFileChange,
        filePreviewUrl    
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
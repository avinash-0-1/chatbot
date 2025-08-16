import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Context } from './Context'
import { Link } from 'react-router-dom'
import '../Main.css'

const Main = () => {
    // Get context values including file handling functions
    const {prev_prmt,setPrev_prmt,onSend,recent_prmt,setRecent_prmt,show_result,loading,result_data,input,setInput,selectedFile,handleFileChange,filePreviewUrl} = useContext(Context)
    const [temp_upload, setTemp_upload] = useState(false);
    // Handle file input changes and validate file types
    const handleFileInputChange = (e) => {
        setTemp_upload(true)
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/') || file.type === 'application/pdf') {
                handleFileChange(file);
            } else {
                alert('Please upload only JPEG or PDF files');
            }
        }
    }

    return (
        <div className='bg'>
            <div id="main">
                <div className='nav'>
                    <p><Link to={'/'}>Baba JI.</Link></p>
                    <img src={assets.user_icon} alt="" />
                </div>
                <div className="main_container">
                  
                    {!show_result?<>
                    <div className="cards">
                        <div className="greet">
                            <p><span>Hello,shishya...</span></p>
                            <p>Ask me Anything..!</p>
                        </div>
                        <div>
                            <img className='G_img' src={assets.guru_face} alt="" />
                        </div>
                    </div>
                </>:<div className='result'>
                        <div className="result_title">
                            <img className='user_img' src={assets.user_icon} alt="" />
                            <p className='user_input'><b>Baba ji..!!,</b>{recent_prmt}</p>
                        </div>
                        <div className="result_data">
                            {loading?<>
                            <div className='loader'>
                                <img src={assets.guru2} alt="" />
                            </div>
                            </>:
                            <>
                            <img className='guru_face' src={assets.guru_face} alt="" />
                            <div className="G">  
                                <div className='g_response'>
                                <p><b>Shishya..!!,</b></p>
                                <div className="File_P-div">
                                    {/* File preview section */}
                                    {filePreviewUrl && (
                                        <div className="file-preview">
                                            {selectedFile?.type.startsWith('image/') ? (
                                                <img 
                                                    src={filePreviewUrl} 
                                                    alt="Uploaded file" 
                                                    className="preview-image"
                                                />
                                            ) : selectedFile?.type === 'application/pdf' ? (
                                                <iframe 
                                                    src={filePreviewUrl} 
                                                    className="preview-pdf"
                                                    title="PDF preview"
                                                />
                                            ) : null}
                                        </div>
                                    )}
                                    <div className="response-text">
                                        <p dangerouslySetInnerHTML={{__html:result_data}}></p>
                                    </div>
                                </div>                                 
                                </div>
                            </div>
                            </>
                            }
                            
                        </div>
                    </div>}

                    {/* Enhanced input area with file upload */}
                    <div className="main_bottom">
                    <form onSubmit={(e) => { e.preventDefault(); onSend(); }} className="search_box">
                        <div className="input-container">
                            {/* Text input with dynamic placeholder */}
                            <input 
                                onChange={(e)=>{setInput(e.target.value)}} 
                                value={input} 
                                type="text" 
                                placeholder='Enter your prompt'
    
                            />
                        </div>
                        
                        {/* File preview and remove button */}
                        
                        {selectedFile && (<>
                                
                                <div className="selected-file">
                                    <span className="file-name"></span>
                                    <div className="upload_btn">
                                <button 
                                        type="button" 
                                        className="remove-file"
                                        onClick={() => handleFileChange(null)}
                                        >
                                        <p><b>X</b></p>
                                    </button>
                                </div>
                                </div>
                            
                            </>
                            )}
                        <div className='search_icon'>
                            {/* File upload button */}
                            <div className="file-upload">
                                <input 
                                    onChange={handleFileInputChange} 
                                    type='file' 
                                    accept='.pdf,.jpg,.jpeg,.png'
                                    id="file-upload"
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor="file-upload" className="file-upload-label">
                                    <img src={assets.gallery_icon} alt="Upload"/>
                                </label>
                            </div>
                            <button type='submit'><img onClick={()=>{onSend()}} src={assets.send_icon} alt=""/></button>
                        </div>
                        
                    </form>
                    <div className='disclaimer'>
                    <p>Baba ji may be wrong sometimes,double-check the response carefully by yourself.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
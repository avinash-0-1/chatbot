import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

async function main(prmt, file = null) {
    let contents = [];
    
    if (file) {
      const base64Data = await convertFileToBase64(file);
      const mimeType = file.type;

      contents.push({
        role: "user",
        parts: [
          { text: prmt },
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Data
            }
          }
        ]
      });
    } else {

      contents.push({
        role: "user",
        parts: [{ text: prmt }]
      });
    }


    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",  
      contents: contents,
    });

    return response.text;
  // } catch (error) {
  //   console.error("Error in Gemini API:", error);
  //   return "Sorry, I encountered an error processing your request.";
  // }
}


function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = error => reject(error);
  });
}

export default main;

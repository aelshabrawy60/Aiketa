import { GoogleGenerativeAI } from '@google/generative-ai';


const apiKey = import.meta.env.VITE_GEMENI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

function formatMarkdown(text) {
  // Convert ## headers to <h2>
  text = text.replace(/^## (.+)$/gm, '<h3>$1</h3>');

  // Convert bold text **text** to <strong>text</strong>
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Convert italicized text *text* to <em>text</em>
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Convert new lines to <br> for line breaks
  text = text.replace(/\n/g, '<br>');

  return text;
}



async function generateResponse(userInput, prompot = '', lang = 'English') {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: 'user',
          parts: [{ text: prompot + 'in' + lang}],
        },
      ],
    });

    let result = await chatSession.sendMessage(userInput);
    result = formatMarkdown(result.response.text())
    return result;
  } catch (error) {
    console.error('Error generating response:', error);
    return 'An error occurred while generating the response.';
  }
}

export default generateResponse
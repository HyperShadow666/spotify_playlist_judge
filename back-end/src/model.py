import os
import google.generativeai as genai

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 1000,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-2.0-flash-exp",
  generation_config=generation_config,
)

chat_session = model.start_chat(
  history=[
    {
      "role": "user",
      "parts": [
       f""" this data shows my playlists: 
       (if the data is not shown, please inform me in the next message why the error happened).
       Analyse my personality shortly and at the end of your report, describe me in a word (use the syntax: "character: <b>xxx</b>"). I want you to be a little bit harsh and funny. 
       ps: 1) you don't need to tell me that you will be harsh and funny before condemning the analysis.
           2) instead of using "" or ** use the <b> tag
       """
      ],
    
    },
  ]
)

def hand_prompt(prompt) :
  resp= chat_session.send_message(prompt)
  return resp.text

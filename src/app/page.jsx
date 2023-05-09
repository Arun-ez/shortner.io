"use client"
import styles from './page.module.css'
import { TbTableShortcut } from 'react-icons/tb'
import Output from '@/components/Output'
import Loading from '@/components/Loading'
import { useState } from "react";
import { PostData } from './actions'
import Image from 'next/image'

export default function Home() {

  const [input, set_input] = useState("");
  const [processing, set_processing] = useState(false);
  const [output, set_output] = useState("")
  const [alert_color, set_alert_color] = useState("");
  const [alert, set_alert] = useState("");

  const generate_key = () => {
    return Math.random().toString(36).substring(2, 10);
  }

  const copied = () => {

    navigator.clipboard.writeText(output).then(() => {
      set_alert_color("green");
      set_alert(`Copied successfully`);
    }).catch(() => {
      set_alert_color("red");
      set_alert(`Could not copy`);
    }).finally(() => {
      setTimeout(() => {
        set_alert_color("");
        set_alert("");
      }, 3000)
    })
  }

  const shorten = async () => {
    set_output("");
    set_alert_color("");
    set_alert("")
    set_processing(false);
    if ((!input) || ((!input.includes('https://')) && (!input.includes('http://')))) {
      set_alert_color("red");
      set_alert("Invalid URL provided");
      return;
    }

    const data = { origin: input, key: generate_key() }
    set_processing(true);

    try {
      let response = await PostData(data);
      if (response.hasOwnProperty('success')) {
        set_output(`${window.location.href + data.key}`);
      }

    } catch (error) {
      set_alert_color("red");
      set_alert(`${error.message}`);
    }
  }

  return (
    <main>
      <h1 > <img src='https://img.icons8.com/?size=512&id=13718&format=png' width={40} height={40} />  Shortener.io </h1>

      <div className={styles.results}>
        {processing === false ?
          <>
            <h3> Click on Get Short URL </h3>
          </>

          :

          <>
            {output ?
              <Output url={output} onCopy={copied} />
              :
              <Loading />
            }

          </>

        }

      </div>

      <p className={styles.alert} style={{ color: alert_color }}> {alert} </p>

      <input type="text" className={styles.link_input_box} placeholder='Enter URL' onChange={(event) => { set_input(event.target.value) }} />
      <button className={styles.button} onClick={shorten}> Get Short URL </button>
    </main>
  )
}

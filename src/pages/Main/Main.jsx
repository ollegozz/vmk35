import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context';
import css from './main.module.css'

export default function Main() {
  const {  isBurger } = useContext(AuthContext)
  return (
    isBurger ? 
      <div className={css.blur}></div>
    :
    <div className={css.wrapper}>
      <h1 style={{ padding: 20 }}>MAIN</h1>
      <div style={{padding: 10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam explicabo reiciendis minima quo? Dolores libero necessitatibus exercitationem accusantium rerum quas, nulla placeat dolorem dolorum, nobis aspernatur sequi, accusamus laborum.
      Dignissimos eos odio itaque. Nemo itaque mollitia ratione assumenda quas dignissimos. Et, aliquam hic mollitia illo alias non itaque eos cupiditate magni veritatis nisi, molestiae odit laborum quibusdam impedit sint.
      Natus cum nisi dolorem! Officiis, error! Dolorem numquam, laudantium doloribus dolores dolorum consectetur saepe exercitationem impedit! Enim eius aspernatur esse, quis id laudantium, cumque dolore, quos explicabo voluptas consequuntur illum.
      Laboriosam nemo dolores consequuntur? Eveniet iure culpa ducimus minima dolor libero eligendi saepe temporibus qui error id aliquid quo, corporis magnam tempore non quae. Porro ad dignissimos fugiat culpa. Voluptatum.
      Cum reiciendis voluptates illum doloremque, harum maiores porro in alias! Dolor quia eaque ipsum saepe, sunt enim, provident architecto ullam cum culpa modi quasi ea quae! Aliquam dolor exercitationem corporis?
      Hic dicta cupiditate aut reprehenderit, itaque nostrum tempore nulla enim pariatur velit, quasi ullam. Tempora asperiores magnam inventore enim voluptatum atque modi? Iure dolorum nisi quasi dicta amet facilis facere.
      Aut laborum harum sed vero consequatur autem ipsa dolor, fugiat cumque sunt dignissimos tenetur aliquid rem, magni eos optio explicabo. Aliquid perspiciatis quas molestias adipisci iste ratione, magni maiores ipsum.
      Aperiam, repellat blanditiis iure quam similique labore quibusdam. Iusto explicabo dolor, quos officiis totam ducimus temporibus optio expedita aliquam, vero repudiandae ut rem aut excepturi, consequatur cum voluptatibus perferendis fugit!
      Et esse sapiente sed maxime accusamus illo animi cumque voluptate hic. Mollitia, libero sed amet corrupti optio odit doloremque dolorem esse veritatis cupiditate voluptas possimus, incidunt eveniet doloribus ipsum animi.
      Totam animi non quasi error accusantium. Perferendis in voluptates, error consequatur vero pariatur animi. Dolorem odit quibusdam, iure recusandae voluptatum eius dolor pariatur molestias magnam saepe repellendus, hic earum nemo!
      Expedita, asperiores! Numquam cupiditate praesentium asperiores eos nesciunt. Suscipit eligendi commodi odio fuga, voluptate dolor qui id, eveniet nulla soluta adipisci, optio officiis facere ut! Voluptatem nam quae numquam ab.
      Distinctio sapiente officiis provident voluptatibus corrupti dolor voluptas quia dolorem! Culpa fugit iusto maiores nostrum adipisci vero sunt, id, eius totam illo corrupti minus obcaecati quo, ad praesentium voluptate a?
      Voluptates impedit est, a sunt doloremque nihil saepe esse vero ipsam iste neque animi ea in veniam eaque maiores adipisci! Hic vitae magnam, iusto exercitationem consectetur officiis neque repellendus placeat!
      Voluptate provident excepturi laudantium molestiae accusantium in ea vitae nostrum totam nisi quae ullam suscipit, nam fuga ducimus nobis quaerat dignissimos quod harum fugiat voluptates repellendus, distinctio perspiciatis saepe? Iusto?
      Obcaecati minima necessitatibus possimus deleniti sapiente laboriosam labore vero atque velit accusamus eos, laudantium dolores voluptas vel quia voluptates deserunt mollitia a et maiores non odit explicabo consequuntur. Rerum, ut.
      Voluptate molestias placeat nisi incidunt voluptatibus impedit deleniti. Beatae, dolorum, quae iure recusandae odio maiores dolorem enim velit nesciunt facilis nostrum quo quos ex, itaque distinctio illum delectus numquam impedit.
      Facilis quos animi maxime hic? Tenetur, sunt neque qui voluptate quam labore culpa necessitatibus ducimus. Officiis quos quae excepturi voluptatem? Dolores deleniti magnam provident, tempora nam ducimus eaque maiores reiciendis.
      Voluptates eaque doloribus ipsam nulla cumque obcaecati ipsum laborum voluptatibus temporibus explicabo. Quidem itaque cupiditate quasi consequuntur est iusto, tempore laborum magni id odit esse facere expedita officia ratione amet.
      Quas nemo expedita voluptatibus praesentium tempore quibusdam aspernatur veritatis similique consequatur! Itaque non quaerat, doloribus molestias beatae consequatur, rem nemo dolorem placeat excepturi tempora voluptate aut doloremque eos? Architecto, odit?
      Placeat ea facilis ipsum reprehenderit ab consequatur, obcaecati amet at, dolorem autem porro nesciunt veniam assumenda quas enim id vel laboriosam. Natus magnam corporis necessitatibus iure at qui sunt impedit!</div>
    </div>
  )
}

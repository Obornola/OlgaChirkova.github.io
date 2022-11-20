import Title from '../Title/Title.jsx';
import SuperheroBlock from '../SuperheroBlock/SuperheroBlock.jsx';
import data from '../../data/data.json';

import '../../style/App.css';

function ShowSuperhero() {
return (
<div className="App">
  <Title />
  {
  data.map((d)=>
  <SuperheroBlock id={d.id}
                  name={d.name}
                  universe={d.universe}
                  alterEgo={d.alterEgo}
                  activity={d.activity}
                  friends={d.friends}
                  superpowers={d.superpowers}
                  image={d.image}
                  details={d.details}>
  </SuperheroBlock>
  )}
</div>
);
}

export default ShowSuperhero;
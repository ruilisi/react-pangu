QiniuAntd examples:

###### Button
```js
import { QiniuAntd } from 'react-pangu';
const token = 'CFkCO0pDrSV4Hgr4obLp4PB7JRDM5OHNNtRmRSXf:1GyWk401OyGKmnE7V__t1r9Y8Nk=:eyJzY29wZSI6InBhaXlvdSIsImRlYWRsaW5lIjoxNTc2MjEzODYyLCJ1cGhvc3RzIjpbImh0dHA6Ly91cC5xaW5pdS5jb20iLCJodHRwOi8vdXBsb2FkLnFpbml1LmNvbSIsIi1IIHVwLnFpbml1LmNvbSBodHRwOi8vMTgzLjEzMS43LjMiXSwiZ2xvYmFsIjpmYWxzZX0='
const qiniuHost = 'https://res.paiyou.co/'

initialState = { url: null };


<div>
   {state.url ? <img src={state.url} style={{ width: 256 }} /> : null}
   <QiniuAntd token={token} onSuccess={key => setState({url: qiniuHost + key})} />
</div>
```

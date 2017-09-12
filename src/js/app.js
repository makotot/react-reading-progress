import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import GoMarkGithub from 'react-icons/lib/go/mark-github'
import ReadingProgress from './lib'
import Header from './header'
import packageJSON from '../../package.json'

import '../scss/app.scss'

const Main = styled.main`
  margin: 1rem 2rem 0;
`

const Install = styled.div`
  display: block;
  padding: 2rem;
  background: linear-gradient(rgb(97, 13, 255), rgb(97, 13, 230));
  color: rgb(255, 255, 255);
  font-size: 1rem;
`

const Article = styled.article`
  font-size: 1rem;
  line-height: 1.4;
`

const StyledReadingProgress = styled(ReadingProgress)`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 0.4rem;
  border: 0;
  background-color: transparent;
  color: rgb(97, 13, 255);
  z-index: 1;

  &::-webkit-progress-bar {
    background: #FFF;
  }

  &::-webkit-progress-value {
    background: rgb(97, 13, 255);
  }

  &::-moz-progress-bar {
    background-color: rgb(97, 13, 255);
  }
`

const Footer = styled.footer`
  margin: 2rem 0 0;
  padding: 2rem;
  background: rgb(97, 13, 255);
  color: rgb(255, 255, 255);
  text-align: center;
`

const GithubLink = styled.a`
  display: block;
  padding: 1rem 2rem;
  background: rgb(23, 40, 41);
  color: rgb(255, 255, 255);
  font-weight: 700;
  text-decoration: none;
  transition: background 0.3s linear;

  &:hover {
    background: rgb(28, 27, 31);
  }
`

const Version = styled.span`
  color: rgb(97, 43, 255);
`

class App extends React.Component {

  render () {
    return (
      <div>
        <StyledReadingProgress targetEl={ '#js-article' } />
        <Header />
        <Install>npm install react-reading-progress</Install>
        <GithubLink href="/">
          <GoMarkGithub />&nbsp;<Version>v{ packageJSON.version }</Version>
        </GithubLink>
        <Main>
          <p>👇 Here is a demo article.</p>
          <Article id="js-article">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc. Ut sem viverra aliquet eget sit amet tellus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. In mollis nunc sed id semper risus in hendrerit gravida. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Amet purus gravida quis blandit. Et ultrices neque ornare aenean euismod elementum nisi quis. Vitae aliquet nec ullamcorper sit amet. Aliquam vestibulum morbi blandit cursus risus at ultrices. Arcu felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Curabitur vitae nunc sed velit dignissim sodales ut eu. Amet est placerat in egestas. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Mattis molestie a iaculis at erat pellentesque adipiscing.

  Egestas diam in arcu cursus euismod quis. Vivamus at augue eget arcu. Cursus in hac habitasse platea dictumst quisque sagittis purus. Porttitor lacus luctus accumsan tortor posuere. Quisque sagittis purus sit amet. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Praesent tristique magna sit amet purus gravida quis. Tincidunt praesent semper feugiat nibh sed. Ut porttitor leo a diam sollicitudin tempor id eu. Ullamcorper sit amet risus nullam eget. Auctor neque vitae tempus quam pellentesque nec.

  Sed risus ultricies tristique nulla. Tortor id aliquet lectus proin nibh nisl condimentum id. Sit amet porttitor eget dolor. Integer vitae justo eget magna fermentum. Condimentum lacinia quis vel eros donec ac odio. Adipiscing elit ut aliquam purus. Porta lorem mollis aliquam ut porttitor leo a. Rhoncus dolor purus non enim praesent elementum. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Faucibus vitae aliquet nec ullamcorper sit. Eget duis at tellus at urna condimentum. Neque vitae tempus quam pellentesque nec nam aliquam. Nunc consequat interdum varius sit amet mattis. Scelerisque in dictum non consectetur a erat. Pellentesque dignissim enim sit amet venenatis. Turpis massa sed elementum tempus egestas sed sed risus pretium. Feugiat scelerisque varius morbi enim nunc faucibus a.

  Ac orci phasellus egestas tellus rutrum. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Facilisis sed odio morbi quis. Malesuada pellentesque elit eget gravida cum. Sit amet consectetur adipiscing elit. In est ante in nibh mauris. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Mi eget mauris pharetra et ultrices neque ornare aenean. Blandit volutpat maecenas volutpat blandit aliquam. Urna molestie at elementum eu facilisis sed odio morbi quis. Sed risus pretium quam vulputate. Lectus arcu bibendum at varius vel. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Et magnis dis parturient montes nascetur ridiculus mus. Dui accumsan sit amet nulla. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Auctor elit sed vulputate mi sit amet mauris commodo. Euismod lacinia at quis risus sed.

  Habitasse platea dictumst quisque sagittis purus. Ac turpis egestas maecenas pharetra. Est lorem ipsum dolor sit. Tortor consequat id porta nibh venenatis cras sed felis eget. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Libero justo laoreet sit amet cursus. Volutpat odio facilisis mauris sit amet. Pretium lectus quam id leo. Dignissim convallis aenean et tortor at risus viverra adipiscing. Velit aliquet sagittis id consectetur. Amet commodo nulla facilisi nullam vehicula ipsum. Massa enim nec dui nunc mattis enim ut tellus elementum. Lacinia quis vel eros donec ac odio. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et.

  Vitae purus faucibus ornare suspendisse. Ut sem viverra aliquet eget sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Id velit ut tortor pretium viverra. Tincidunt lobortis feugiat vivamus at. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Mattis pellentesque id nibh tortor. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Convallis tellus id interdum velit. Velit euismod in pellentesque massa. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Risus sed vulputate odio ut enim blandit volutpat. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.

  Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Elit sed vulputate mi sit amet. Lobortis feugiat vivamus at augue. Arcu bibendum at varius vel pharetra vel turpis. Nec sagittis aliquam malesuada bibendum arcu. Aliquet nec ullamcorper sit amet risus nullam eget. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Dolor sed viverra ipsum nunc. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Enim tortor at auctor urna nunc id cursus metus aliquam. Id aliquet risus feugiat in ante metus. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Sapien nec sagittis aliquam malesuada bibendum. Mauris nunc congue nisi vitae suscipit tellus. Urna et pharetra pharetra massa. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ultrices gravida dictum fusce ut. Elit eget gravida cum sociis. In cursus turpis massa tincidunt dui ut ornare lectus sit.

  Adipiscing bibendum est ultricies integer. Urna molestie at elementum eu facilisis sed odio. Libero justo laoreet sit amet cursus sit amet dictum. Diam vel quam elementum pulvinar etiam non. Amet nisl purus in mollis nunc. Tincidunt augue interdum velit euismod in. Morbi tristique senectus et netus et. In ornare quam viverra orci. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Morbi tempus iaculis urna id volutpat lacus. Convallis aenean et tortor at risus viverra adipiscing. Mattis rhoncus urna neque viverra justo nec. Cursus vitae congue mauris rhoncus. Dignissim enim sit amet venenatis urna cursus eget nunc. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Est placerat in egestas erat imperdiet sed euismod. Augue ut lectus arcu bibendum. Amet consectetur adipiscing elit ut aliquam purus sit.

  Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Non nisi est sit amet. Felis eget velit aliquet sagittis id. Nisi quis eleifend quam adipiscing. Facilisis sed odio morbi quis commodo odio aenean sed. Quis commodo odio aenean sed adipiscing diam donec. Sem et tortor consequat id porta. Orci a scelerisque purus semper eget. Nulla porttitor massa id neque aliquam vestibulum. Lectus quam id leo in vitae turpis massa. Id faucibus nisl tincidunt eget nullam non. Volutpat diam ut venenatis tellus. Gravida cum sociis natoque penatibus et magnis. Risus in hendrerit gravida rutrum quisque. Dui nunc mattis enim ut tellus elementum sagittis. Ut venenatis tellus in metus vulputate eu scelerisque felis. Mauris sit amet massa vitae tortor condimentum lacinia quis. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Tortor at risus viverra adipiscing at in.

  Ipsum dolor sit amet consectetur adipiscing elit ut. Neque convallis a cras semper auctor neque. Quis lectus nulla at volutpat diam ut venenatis. Ut morbi tincidunt augue interdum velit euismod in. Adipiscing commodo elit at imperdiet. Ultrices tincidunt arcu non sodales neque sodales ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Vel risus commodo viverra maecenas accumsan. Duis tristique sollicitudin nibh sit amet. Sit amet est placerat in egestas. Aliquet risus feugiat in ante metus. Morbi non arcu risus quis varius quam. Egestas dui id ornare arcu odio ut sem nulla. Justo laoreet sit amet cursus sit amet dictum sit. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Libero volutpat sed cras ornare. Aliquet nec ullamcorper sit amet. Diam quis enim lobortis scelerisque fermentum dui. Sed id semper risus in hendrerit gravida.

  Volutpat est velit egestas dui id ornare arcu odio ut. Sit amet volutpat consequat mauris nunc congue. Ut morbi tincidunt augue interdum velit. Mi ipsum faucibus vitae aliquet. Ut aliquam purus sit amet luctus venenatis lectus. Amet purus gravida quis blandit turpis cursus in hac habitasse. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Non nisi est sit amet. Enim praesent elementum facilisis leo vel fringilla est. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Enim tortor at auctor urna nunc id cursus metus aliquam. Vehicula ipsum a arcu cursus vitae congue mauris. Lacus sed viverra tellus in hac habitasse platea dictumst. Purus sit amet luctus venenatis lectus magna fringilla urna. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Dictumst quisque sagittis purus sit amet. Varius duis at consectetur lorem donec. Nulla posuere sollicitudin aliquam ultrices sagittis. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. A erat nam at lectus urna duis convallis.

  Fames ac turpis egestas sed tempus urna et pharetra. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Tristique sollicitudin nibh sit amet commodo. Ac auctor augue mauris augue neque. Accumsan lacus vel facilisis volutpat est velit egestas. Et netus et malesuada fames ac turpis egestas. Elit duis tristique sollicitudin nibh sit amet. At lectus urna duis convallis convallis tellus. In fermentum posuere urna nec tincidunt. Amet nisl suscipit adipiscing bibendum. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Eget mauris pharetra et ultrices neque. Eu augue ut lectus arcu bibendum. Leo vel orci porta non pulvinar neque laoreet suspendisse. Sed ullamcorper morbi tincidunt ornare massa. Et ultrices neque ornare aenean euismod. Dolor sed viverra ipsum nunc aliquet. Aliquam vestibulum morbi blandit cursus risus at ultrices mi.

  Euismod quis viverra nibh cras pulvinar. Id ornare arcu odio ut sem nulla. Non curabitur gravida arcu ac tortor dignissim. Semper eget duis at tellus at urna condimentum mattis. Velit egestas dui id ornare. Sed egestas egestas fringilla phasellus faucibus. Pharetra magna ac placerat vestibulum. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Sit amet mauris commodo quis imperdiet. Vitae et leo duis ut diam quam nulla. At lectus urna duis convallis convallis tellus id interdum velit. Dolor morbi non arcu risus quis varius. In ante metus dictum at tempor commodo ullamcorper a lacus. Nisl rhoncus mattis rhoncus urna neque. Sed nisi lacus sed viverra. Vitae justo eget magna fermentum iaculis. Adipiscing bibendum est ultricies integer. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Integer feugiat scelerisque varius morbi enim nunc faucibus a.

  Enim sed faucibus turpis in eu mi bibendum neque. Egestas diam in arcu cursus euismod quis viverra nibh. Sed odio morbi quis commodo. Purus faucibus ornare suspendisse sed nisi lacus. Eu sem integer vitae justo eget magna fermentum iaculis eu. Faucibus et molestie ac feugiat sed. Nulla facilisi etiam dignissim diam quis enim lobortis. Interdum velit euismod in pellentesque. Non pulvinar neque laoreet suspendisse interdum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. In hac habitasse platea dictumst vestibulum rhoncus. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Sit amet nulla facilisi morbi tempus iaculis urna id. Ac ut consequat semper viverra nam libero justo laoreet sit.

  Sagittis aliquam malesuada bibendum arcu vitae elementum. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Quis blandit turpis cursus in hac. Sed viverra ipsum nunc aliquet bibendum. Ut sem nulla pharetra diam. Turpis egestas integer eget aliquet nibh praesent. Lacus luctus accumsan tortor posuere ac ut. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Accumsan sit amet nulla facilisi morbi tempus. Lacus vel facilisis volutpat est velit egestas dui id ornare. Et malesuada fames ac turpis egestas integer eget. Purus semper eget duis at tellus at. A lacus vestibulum sed arcu non odio euismod. Nec nam aliquam sem et tortor. Purus non enim praesent elementum facilisis.

  Cras pulvinar mattis nunc sed blandit libero. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Rhoncus urna neque viverra justo. Lobortis elementum nibh tellus molestie nunc non blandit. At tellus at urna condimentum mattis pellentesque id. Turpis nunc eget lorem dolor. Tellus in hac habitasse platea dictumst. Tortor consequat id porta nibh venenatis. Nec sagittis aliquam malesuada bibendum arcu vitae. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Luctus accumsan tortor posuere ac ut consequat semper viverra. Condimentum lacinia quis vel eros donec ac. Et ultrices neque ornare aenean euismod elementum nisi. Neque gravida in fermentum et sollicitudin ac. A condimentum vitae sapien pellentesque. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.

  Vel eros donec ac odio tempor. Nibh cras pulvinar mattis nunc sed blandit libero. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Nec dui nunc mattis enim ut tellus elementum. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Eget egestas purus viverra accumsan in. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Elementum sagittis vitae et leo duis ut diam quam nulla. Posuere urna nec tincidunt praesent. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Nibh ipsum consequat nisl vel pretium lectus quam id. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Fermentum posuere urna nec tincidunt praesent semper. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Vitae nunc sed velit dignissim sodales ut eu sem integer. In nibh mauris cursus mattis molestie a iaculis. Sapien faucibus et molestie ac feugiat sed lectus. Massa sed elementum tempus egestas sed sed risus pretium. Sit amet dictum sit amet justo donec.

  Luctus accumsan tortor posuere ac. Massa tincidunt dui ut ornare lectus sit amet. Eget nullam non nisi est. Vitae et leo duis ut. Quam viverra orci sagittis eu volutpat odio. Mollis nunc sed id semper risus in hendrerit gravida. Venenatis tellus in metus vulputate eu scelerisque. Risus sed vulputate odio ut. Pellentesque elit ullamcorper dignissim cras. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Turpis tincidunt id aliquet risus.

  Orci dapibus ultrices in iaculis. Facilisis gravida neque convallis a cras semper auctor neque vitae. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Diam vulputate ut pharetra sit. Id velit ut tortor pretium viverra suspendisse potenti nullam. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Turpis nunc eget lorem dolor sed viverra. Tellus elementum sagittis vitae et leo duis ut diam. Dictum at tempor commodo ullamcorper. Enim neque volutpat ac tincidunt vitae semper quis. Velit dignissim sodales ut eu. Hac habitasse platea dictumst quisque sagittis purus sit. Risus in hendrerit gravida rutrum quisque non tellus orci. Nunc faucibus a pellentesque sit. Adipiscing commodo elit at imperdiet dui accumsan. Auctor augue mauris augue neque gravida in. Sed sed risus pretium quam vulputate dignissim. Eu lobortis elementum nibh tellus molestie. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Viverra justo nec ultrices dui sapien eget mi proin sed.

  In ante metus dictum at tempor commodo ullamcorper a. Ultricies mi quis hendrerit dolor magna eget est. Feugiat sed lectus vestibulum mattis ullamcorper. Lacus viverra vitae congue eu consequat ac. Sollicitudin nibh sit amet commodo nulla. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Elit at imperdiet dui accumsan sit amet nulla. Duis tristique sollicitudin nibh sit amet. Semper auctor neque vitae tempus quam pellentesque nec nam. Velit dignissim sodales ut eu sem integer. Quis lectus nulla at volutpat diam. Risus quis varius quam quisque id. Dictum at tempor commodo ullamcorper a lacus. Pharetra massa massa ultricies mi quis. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem.
          </Article>
        </Main>
        <Footer>
          Licenced under MIT
        </Footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('js-app'))

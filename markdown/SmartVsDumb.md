# Smart vs Dumb

모든 component 가 state 를 가지는 것은 아니다. (smart component)

어떤 component 는 stateless functional component 이다. (dumb component)

## `왜 smart compnent와 dumb 컴포넌트를 나눠야 하는 것인가?`

어떤 component 는 그저 return 하기 위해 존재한다. 이러한 component는 props 만 존재하면 된다.

```js
class MoviePoster extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    
    render(){
        return(
             <img src={poster} alt={title} />
        );
    }
}
// class compoent 대신, functional stateless component 로 만들기
const MoviePoster = ({poster, title}) => {
    return (
        <img src={poster} alt={title} />
    )
}

MoviePoster.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}
```
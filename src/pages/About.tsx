import {useRecoilState} from 'recoil';
import loading from '../store/loading';
export default function About() {
    const [isLoading, setIsLoading] = useRecoilState(loading);
    return (
        <div>
            <h1>About</h1>
            <h3>{isLoading.toString()}</h3>
        </div>
    
    )
}
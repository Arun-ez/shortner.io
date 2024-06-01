import { GetData } from '../actions';
import { redirect } from 'next/navigation';

const page = async ({ params: { code } }) => {

    const { success, url } = await GetData(code);

    if (success) {
        return redirect(url);
    }

    return (
        <div className={'result'}>
            <img src={'/not-found.svg'} alt="not-found" />
            <h1> Inavlid Url </h1>
        </div>
    )

}

export default page

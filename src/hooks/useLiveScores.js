import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json());

 
const Scores = () => {
  const { data, error, isLoading } = useSWR('https://api.cricapi.com/v1/currentMatches?apikey=32c8bddb-0190-47ae-a781-61664a2f8783&offset=0', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
 
  return data;
}

export default Scores;
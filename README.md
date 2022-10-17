# useEffect-common-error-state-initialization

This code demonstrates one common misuse of useEffect.
I have seen it here: https://www.facebook.com/groups/442974152553174/permalink/2251284581722113/
but no one seems to pickup on this obvious error.
When you initialize state with useEffect the first render will be wrong and will only be corrected on the after useEffect execution.
As you can see in the Console here, initially the first value of Counter 1 is 0 then the next execution first value of Counter 2 is 5.
After that, the Counter 1 will only be updated to 5.
This is an unnecessary rerender.
The solution is to simply initialize the state within the useState as seen in the Counter 2.
More common misuse of useEffect is documented here: https://beta.reactjs.org/learn/you-might-not-need-an-effect
With so many errors in the usage of useEffect Tech Twitter suggest that useEffect should be called useSynchronize instead https://twitter.com/search?q=useSynchronize&src=typed_query&f=top.

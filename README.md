The test is not so easy as it looks. Candidate need to know async, await, map... to finish

I have some problem at the beginning. Not too familiar with typescript and need to learn somes.

Finished the code, result is fine but the test is failed (test 1,3 are good but test 2,4 are failed)

Debugging:

+remove button search (found out the test require live search)

+add aria-label "search to input, label doesn't work
+remove errorMessage that display when searchTeam <4 (didn't work)

+change displayJob from table form to span (didn't work)

+...

+found out bug with async function, remove state inputText, replace by e.target.value

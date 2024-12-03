# Plagiarism Acknowledgement
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

https://www.geeksforgeeks.org/iterative-merge-sort/
https://www.geeksforgeeks.org/in-place-merge-sort/

# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The worst-case complexity would be $\Theta$(n<sup>2</sup>log(n)). The complexity of the mergeSort function is log(n), so it calls merge log(n) times. The merge function has a worst-case complexity of n * n/2 when i is the end of the array and left is 0. Since merge is being called log(n) times, the complexity is log(n) * n * (n / 2) or $\Theta$(n<sup>2</sup>log(n)).

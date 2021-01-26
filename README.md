Uses a brute-force method to find polynomials which generate AES s-boxes of a certain level of entropy.

If you just want the list of valid polynomials and don't want to run this yourself:
```1 + x + x**3 + x**4 + x**8
1 + x**3 + x**4 + x**5 + x**8
1 + x + x**2 + x**3 + x**4 + x**5 + x**8
1 + x**2 + x**3 + x**6 + x**8
1 + x + x**2 + x**3 + x**4 + x**6 + x**8
1 + x + x**5 + x**6 + x**8
1 + x**2 + x**5 + x**6 + x**8
1 + x**3 + x**5 + x**6 + x**8
1 + x + x**2 + x**4 + x**5 + x**6 + x**8
1 + x**2 + x**3 + x**7 + x**8
1 + x + x**2 + x**3 + x**4 + x**7 + x**8
1 + x + x**5 + x**7 + x**8
1 + x**3 + x**5 + x**7 + x**8
1 + x + x**6 + x**7 + x**8
1 + x**2 + x**4 + x**5 + x**6 + x**7 + x**8
1 + x**3 + x**4 + x**5 + x**6 + x**7 + x**8```

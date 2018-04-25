function permutation(a, m, n) {
    var  t;
    if (m < n - 1) {
        permutation(a, m + 1, n);
        for (var i = m + 1; i < n; i++) {
            t = a[m];
            a[m] = a[i];
            a[i] = t;
            permutation(a, m + 1, n);
            t = a[m];
            a[m] = a[i];
            a[i] = t;
        }
    } else {
        console.log(a)
    }
}
permutation("abcd".split(""),1,4);
<script>
    cont array1 =[1,2323,4,555,33,5525];
    array1.AlphaSort();
    array1.numericSort();
    function AlphaSort(){
        array1.sort()
    }
    function numericSort(){
        array1.sort(function(a,b) {return (a-b)})
    }
</script>
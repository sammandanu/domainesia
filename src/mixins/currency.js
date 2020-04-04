export default {
    methods: {
        rupiah: function (number) {
            var	number_string = number.toString()
            var sisa 	= number_string.length % 3
            var rupiah 	= number_string.substr(0, sisa)
            var ribuan 	= number_string.substr(sisa).match(/\d{3}/g)
                
            if (ribuan) {
                var separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            return rupiah
        }
    }
}
function RedrawOutput() {
	 document.getElementById('id-filter-range-output').value='Цена: '+
	 	Math.min(document.getElementById('id-filter-range-1').value, document.getElementById('id-filter-range-2').value)+' руб. - '+
	 	Math.max(document.getElementById('id-filter-range-1').value, document.getElementById('id-filter-range-2').value)+' руб.';	 	
}
/*�������� ����*/
function addCat(pol, name, job, smell, online, color, costume, size, items) {

	//
	// ���
	//

	var cat = '';
	/*������� � �������*/
	for (i = 0; i < costume.length; i++) {
		cat += '<div style="background-image:url(\''+ costume[i] + '\');background-size:' + size + '%; position: absolute;"></div>';
	}
	/*�����*/
	cat = '<div style="background-image:url(\'' + color + '\');background-size:' + size + '%;" class="d">' + cat + '</div>';

	//
	//��������
	//

	var dataCat = '',
		cName = '<u><a href="#">' + name + '</a></u><br>',
		cJob = '<small><i>' + job + '</i></small><br>',
		cSmell = ((pol == 'der') ? '��� ' : 'Ÿ ') + '�����:<br><img src="' + smell + '"><br>',
		cOnline = '[';
	switch (online) {
		case 'online':
			cOnline += '<font color="#006400">� ����</font>';
			break;
		case 'offline':
			cOnline += '<font color="#A52A2A">����</font>';
			break;
		case 'wait':
			cOnline += '<font color="#333333">������� ' + (pol == 'der') ? '����' : '����' + '</font>';
			break;
		case 'delete':
			cOnline += '<font color="#333366">�� ��������</font>';
			break;
		case 'block':
			cOnline += '<font color="#333366">������������' + (pol == 'der') ? '' : '�' + '</font>';
			break;
	}
	cOnline += ']';
	dataCat = '<span class="cat_tooltip" style="display:block;z-index: 9999;padding: 5px; min-width: 80px; background: RGBA(255, 255, 255, 0.9); border: 1px solid gray; border-radius: 6px; color: #930; font-weight: bold; text-align: center;" >' + cName + cJob + cSmell + cOnline + '</span>';

	//
	//������ ���� � ������
	//

	var CatAndData = '<span class="catWithArrow"><span class="cat">' + cat + dataCat + '</span></span>';

	//
	//�������� � ������
	//

	var allItems = (items.length > 0) ? 'background: ' : '';
	for (i = 0; i < items.length && i < 5; i++) {
		let a = '';
		switch (i) {
			case 0:
				a = '0% 0%';
				break;
			case 1:
				a = '100% 0%';
				break;
			case 2:
				a = '0% 100%';
				break;
			case 3:
				a = '100% 100%';
				break;
		}
		allItems += 'url("' + items[i] + '") ' + a + ' no-repeat' + (i == items.length - 1) ? ';' : ',';
	}

	//
	//������
	//

	var td = '<div class="cage_items" style="' + allItems + '">' + CatAndData + '</div>';
	return td
	//������� �������� �� ����, ������ ���...
}
$('#previewcatBtn').on('click', function () {
	/*�� ������� �� ������*/
	$('#previewDataCat').html(addCat(
		$('#catPOL').val(),
		$('#catName').val(),
		$('#catJob').val(),
		$('#catSmell').val(),
		$('#catOnline').val(),
		$('#catColor').val(),
		$('#catCostume').val().split(','),
		Number($('#catSize').val()),
		''
	));
});
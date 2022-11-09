const tbody = document.querySelector('tbody');
    const buttonGroup = document.querySelector('#button-group');
    const nameValue = document.querySelector('#name');
    const commentValue = document.querySelector('#comment');
    // 폼 [등록] 버튼 클릭 시
    // - 테이블에 데이터 추가
    function createVisitor () {
      console.log('click 등록 버튼');

      // 폼 선택
      const form = document.forms['visitor-form'];
      console.dir(form);
      console.log(form.name.value); // name input 값의 value
      console.log(form.comment.value); // comment input 값의 value

      if (!form.name.value.length || !form.comment.value.length) {
        alert('이름과 방명록을 모두 작성해주세요');
        return;
      }
      axios({
        method: 'POST',
        url: '/visitor/write',
        data: {
          name: form.name.value,
          comment: form.comment.value,
        }
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        return res.data;
      }).then((data) => {
        console.log(data);

        const html = `
        <tr id = 'tr_${data.id}'>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.comment}</td>
          <td><button type="button" onclick="editvisitor('${data.id}');">수정</button></td>
          <td><button type="button" onclick="deleteVisitor(this,  '${data.id}');">삭제</button></td>
        </tr>`;

        // 테이블에 추가된 정보를 바로 보여주기
        // data 객체에 담긴 값을 이용해서 tbody 태그의 자식으로 tr 한줄이 추가되는 코드
        // js : insertAdjacentHTML() 특정 요소에 html 코드 추가 가능
        // js : innerHTML() : 기존 html 코드 지우고 덮어씌움
        // jquery : append()
        tbody.insertAdjacentHTML('beforeend', html);
        // $('tbody').append(html);

        // input 초기화
        clearInput();
      });
    };

    // 테이블 내 [수정] 버튼 클릭 시 
    // - form input에 각각 이름과 방명록 값을 넣기
    // - [변경], [취소] 버튼 대체 -> innerHTML
    async function editVisitor(id) {
      console.log('edit visitor');
      console.log(id); // 현재 행에 대한 id (pk)

      // axios 응답 결과를 result 변수에 담고자 함 (동기 처리 필요)
      // (result 변수에 한 명에 대한 정보를 담아야 함)
      // -> axios 처리를 기다렸다가 result 변수에 담아야 함 (동기처리)
      // -> async/await
      // await를 만나 promise가 처리될 때까지 기다림
      let result = await axios({
        method: 'GET',
        url: `/visitor/get?id=${id}`,
      }).then((res) => {
        console.log(res.data);
        return res.data;
      });
      console.log('방문자 하나 조회 결과', result);
      
      nameValue.value = result.name;
      commentValue.value = result.comment;

      const html = `
        <button type="button" onclick="editDo('${id}');">변경</button>
        <button type="button" onclick="editCancle();">취소</button>
      `;
      buttonGroup.innerHTML = html;
    };

    // [변경] 버튼 클릭 시
    // - 데이터 변경
    function editDo(id) {
      const form = document.forms['visitor-form'];

      axios({
        method: 'PATCH',
        url: '/visitor/edit',
        data: {
          id: id,
          name: form.name.value,
          comment: form.comment.value,
        }
      }).then((res) => {
        console.log(res.data);
        return res.data;
      }).then((data) => {
        alert(data); // 수정 성공

        const children = document.querySelector(`#tr_${id}`).children; // 배열 크기 5 (tr 5개)
        console.log(children);
        // in js
        // children[1].textContent = form.name.value;
        // children[2].textContent = form.comment.value;

        // in jquery
        $(`#tr_${id}`).children('td:eq(1)').text(form.name.value);
        $(`#tr_${id}`).children('td:eq(2)').text(form.comment.value);

        const html = `<button type="button" onclick="createVisitor();">등록</button>`;
        buttonGroup.innerHTML = html;

        clearInput();
      });
    };

    // [삭제] 버튼 클릭 시
    // - 테이블에서 해당 행 삭제
    function deleteVisitor(obj, id) {
      console.log('click 삭제 버튼');
      console.log(obj);
      console.log(id);

      let result = confirm('정말 삭제하시겠습니까?');

      if (!result) {
        return;
      }
      axios({
        method: 'DELETE',
        url: '/visitor/delete',
        data: {
          id: id,
        },
        }).then((res) => {
          console.log(res.data);
          return res.data;
        }).then(data => {
            obj.closest(`#tr_${id}`).remove(); // 간단버전
            alert('삭제되었습니다.');

          // obj : 삭제 버튼 자기 자신
          // obj.parentElement.parentElement.remove();
          // closest() 메서드
          // obj.closest(`#tr_${id}`).remove(); // 간단버전
      });
    }; 
    
    // input 초기화
    function clearInput() {
      const form = document.forms['visitor-form'];
      form.name.value = '';
      form.comment.value = '';
    }

    // [취소] 버튼 클릭 시
    // - input 초기화, 등록 버튼 보이기
    function editCancle() {
       // 초기화
      clearInput();

      // 등록 버튼 보이기
      const html = `<button type="button" onclick="createVisitor();">등록</button>`;
      buttonGroup.innerHTML = html;
    };

    let limit = document.querySelector('#name');
    function inputLimit() {
      if (limit.value.length > 10) {
        alert('10자 초과 입력 불가능');
        limit.value = limit.value.substring(0, limit.value.length-1);
      };
    };
const jovem={template:`
<div>
<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Adicionar Jovem
</button>
<table class="table table-striped">
<thead>
    <tr>

    <th>
    Id
</th>
<th>
    Registro
</th>
<th>
    Nome
</th>
<th>
    Seção
</th>
<th>
    Promessa
</th>
<th>
    Data de Nascimento
</th>
<th>
    Valor Mensalidade
</th>
<th>
    Opções
</th>
    </tr>
</thead>
<tbody>
    <tr v-for="emp in employees">
        <td>{{emp.jovem_id}}</td>
        <td>{{emp.registro}}</td>
        <td>{{emp.nome}}</td>
        <td>{{emp.secao}}</td>
        <td>{{emp.promessa}}</td>
        <td>{{emp.data_nascimento}}</td>
        <td>{{emp.valor_mensalidade}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(emp)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(emp.jovem_id)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
        </td>
    </tr>
</tbody>
</thead>
</table>
<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">
        
            <div class="input-group mb-3">
                <span class="input-group-text">Registro</span>
                <input type="text" class="form-control" v-model="registro">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Nome</span>
                <input type="text" class="form-control" v-model="nome">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Seção</span>
                <select class="form-select" v-model="secao">
                    <option v-for="dep in departments">
                    {{dep.secao_nome}}
                    </option>
                </select>            
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Promessa</span>
                <input type="text" class="form-control" v-model="promessa">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Data Nascimento</span>
                <input type="date" class="form-control" v-model="data_nascimento">
            </div>

            <div class="input-group mb-3">
            <span class="input-group-text">Valor Mensalidade</span>
            <input type="number" class="form-control" v-model="valor_mensalidade">
        </div>
        </div>
    
    </div>
        <button type="button" @click="createClick()"
        v-if="jovem_id==0" class="btn btn-primary">
        Adicionar
        </button>
        <button type="button" @click="updateClick()"
        v-if="jovem_id!=0" class="btn btn-primary">
        Atualizar
        </button>
    </div>
</div>
</div>
</div>
</div>
`,

data(){
    return{
        departments:[],
        employees:[],
        modalTitle:"",
        jovem_id:0,
        nome:"",
        secao:"",
        promessa:"",
        data_nascimento:"",
        valor_mensalidade:"",

    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"jovem")
        .then((response)=>{
            this.employees=response.data;
        });

        axios.get(variables.API_URL+"secao")
        .then((response)=>{
            this.departments=response.data;
        });
    },
    addClick(){
        this.modalTitle="Adicionar Jovem";
        this.jovem_id=0;
        this.registro="";
        this.nome="";
        this.secao="",
        this.promessa="",
        this.data_nascimento="",
        this.valor_mensalidade=""
    },
    editClick(emp){
        this.modalTitle="Editar Jovem";
        this.registro=emp.registro;
        this.nome=emp.nome;
        this.secao=emp.secao,
        this.promessa=emp.promessa,
        this.data_nascimento=emp.data_nascimento,
        this.valor_mensalidade=emp.valor_mensalidade
    },
    createClick(){
        axios.post(variables.API_URL+"jovem",{
            registro:this.registro,
            nome:this.nome,
            secao:this.secao,
            promessa:this.promessa,
            data_nascimento:this.data_nascimento,
            valor_mensalidade:this.valor_mensalidade

        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"jovem",{
            registro:this.registro,
            nome:this.nome,
            secao:this.secao,
            promessa:this.promessa,
            data_nascimento:this.data_nascimento,
            valor_mensalidade:this.valor_mensalidade
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Tem certeza que deseja deletar?")){
            return;
        }
        axios.delete(variables.API_URL+"jovem/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },

    

},
mounted:function(){
    this.refreshData();
}
}
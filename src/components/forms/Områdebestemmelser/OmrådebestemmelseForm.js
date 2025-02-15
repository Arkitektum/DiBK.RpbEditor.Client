import Form from 'react-bootstrap/Form';
import { Calendar, Tags, TextEditor } from 'components/custom-elements';

const OmrådebestemmelseForm = ({ state, onChange }) => {
   return (
      <div className="section">
         <div className="row">
            <div className="col-2">
               <Form.Group>
                  <Form.Label>Nummerering</Form.Label>
                  <Form.Control type="text" name="nummerering" value={state.nummerering || ''} onChange={onChange} />
               </Form.Group>
            </div>
            <div className="col-10">
               <Form.Group>
                  <Form.Label>Overskrift</Form.Label>
                  <Form.Control type="text" name="overskrift" value={state.overskrift || ''} onChange={onChange} />
               </Form.Group>
            </div>
         </div>
         <div className="row">
            <div className="col">
               <Form.Group>
                  <Form.Label>Tekst</Form.Label>
                  <TextEditor name="tekst.tekstInnhold" value={state.tekst.tekstInnhold || ''} onChange={onChange} />
               </Form.Group>
            </div>
         </div>
         <div className="row">
            <div className="col-3">
               <Form.Group>
                  <Form.Label>Versjonsdato</Form.Label>
                  <Calendar name="versjonsdato" value={state.versjonsdato} onChange={onChange} />
               </Form.Group>
            </div>
            <div className="col-3">
               <Form.Group>
                  <Form.Label>Versjonsnummer</Form.Label>
                  <Form.Control type="text" name="versjonsnummer" value={state.versjonsnummer || ''} onChange={onChange} />
               </Form.Group>
            </div>
         </div>
         {
            /*<div className="row">
               <div className="col-6">
                  <Form.Group>
                     <Form.Label>Alternativ referanse</Form.Label>
                     <Form.Control type="text" name="alternativReferanse" value={state.alternativReferanse || ''} onChange={onChange} />
                  </Form.Group>
               </div>
            </div>*/
         }
         <div className="row">
            <div className="col">
               <Form.Group>
                  <Form.Label>Bestemmelseområdenavn</Form.Label>
                  <Tags name="bestemmelseOmrådenavn" value={state.bestemmelseOmrådenavn || []} onChange={onChange} />
               </Form.Group>
            </div>
         </div>
         <div className="row">
            <div className="col">
               <Form.Group>
                  <Form.Label>Feltnavn</Form.Label>
                  <Tags name="feltnavn" value={state.feltnavn || []} onChange={onChange} />
               </Form.Group>
            </div>
         </div>
         <div className="row">
            <div className="col">
               <Form.Group>
                  <Form.Label>Objektnavn</Form.Label>
                  <Tags name="objektnavn" value={state.objektnavn || []} onChange={onChange} />
               </Form.Group>
            </div>
         </div>
      </div>
   );
}

export default OmrådebestemmelseForm;

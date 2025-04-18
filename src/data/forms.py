from flask_wtf import FlaskForm
import wtforms 


class RewiewForm(FlaskForm):
    text=wtforms.StringField("Введіть свій відгук про даний товар", validators=[wtforms.validators.length(5, message="Відгук занадто короткий")])
    submit = wtforms.SubmitField("Зберегти")